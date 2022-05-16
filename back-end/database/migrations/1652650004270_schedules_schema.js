"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class SchedulesSchema extends Schema {
  up() {
    this.create("schedules", (table) => {
      table.increments("id").primary("schedule_fk");
      table.integer("user_id").notNullable().references("id").inTable("users");
      table.date("date").notNullable();
      table.time("time").notNullable();
      table.string("motive").notNullable();
      table.string("status").defaultTo("OK");
      table.string("requested_at").notNullable().defaultTo("now()");
      table.string("updated_at").notNullable().defaultTo("now()");
      table.unique(["date", "time"]);
    });
  }

  down() {
    this.drop("schedules");
  }
}

module.exports = SchedulesSchema;
