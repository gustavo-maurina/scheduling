"use strict";

const getFormattedDate = require("../Utils/getFormattedDate.js");
const WORKING_HOURS = require("../Constants/workingHours.js");
const incrementOneDay = require("../Utils/incrementOneDay.js");

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");
const Database = use("Database");

class Schedule extends Model {
  static get createdAtColumn() {
    return "requested_at";
  }

  static async nextAvailable(
    searchDate = getFormattedDate(),
    searchTime = WORKING_HOURS[0]
  ) {
    let nextSlotAvailable;
    let date = searchDate;
    let isFirstDay = true;
    let startingHour = parseInt(searchTime.split(":")[0]) + 1;
    if (startingHour === 18) {
      date = incrementOneDay(date);
      startingHour = 9;
    }

    while (!nextSlotAvailable) {
      const schedules = await Database.from("schedules")
        .where({ date })
        .where(
          "time",
          ">",
          isFirstDay ? `${startingHour}:00:00` : WORKING_HOURS[0]
        );

      if (!schedules.length) {
        nextSlotAvailable = `${startingHour}:00:00`;
        break;
      }

      let hours = [...WORKING_HOURS];
      if (isFirstDay) hours.splice(0, startingHour - 9); // remover horarios que antecedem horário da busca

      for (const time of hours) {
        if (!schedules.find((schedule) => schedule.time === time)) {
          if (searchTime) nextSlotAvailable = time;
          break;
        }
      }

      date = incrementOneDay(date);
      isFirstDay = false;
    }

    return { date, time: nextSlotAvailable };
  }

  static async isAvailable(date, time) {
    const schedule = await Database.from("schedules").where({ date, time });

    if (!schedule.length || schedule[0].status === "CANCELED") return true;
    return false;
  }
}

module.exports = Schedule;
