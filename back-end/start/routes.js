"use strict";

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.on("/").render("welcome");

Route.post("/create-user", "UserController.createUser");
Route.post("/create-schedule", "ScheduleController.createSchedule");
