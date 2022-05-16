"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UsersSchema extends Schema {
  up() {
    this.create("users", (table) => {
      table.increments("id").primary("user_fk");
      table.string("name").notNullable();
      table.string("surname").notNullable();
      table.string("email").notNullable().unique();
      table.string("phone").notNullable().unique();
      table.timestamps();
    });
  }

  down() {
    this.drop("users");
  }
}

module.exports = UsersSchema;
