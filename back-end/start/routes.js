"use strict";

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.on("/").render("welcome");

// USER
Route.post("/user", "UserController.store");

// SCHEDULE
Route.post("/schedule", "ScheduleController.store");
Route.get("/schedule", "ScheduleController.index");
Route.get("/next-schedule-available", "ScheduleController.nextAvailable");
