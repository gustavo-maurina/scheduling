"use strict";

const Database = use("Database");
const Schedule = use("App/Models/Schedule");
const User = use("App/Models/User");
const { validate } = use("Validator");

const storeRules = {
  motive: "required|string",
  date: "required|string",
  time: "required|string",
  email: "required|string",
};

class ScheduleController {
  async index({ request, response }) {
    const { email } = request.get();
    console.log(email);

    if (email) {
      const user = await User.findBy("email", request.only(["email"]).email);
      if (!user)
        return response.status(404).send({ error: "Usuário não existe" });

      const schedules = await Schedule.query()
        .where("user_id", user.id)
        .fetch();
      return response.send(schedules);
    }

    const schedules = await Schedule.all();
    response.send(schedules);
  }

  async store({ request, response }) {
    const validation = await validate(request.all(), storeRules);
    if (validation.fails())
      return response.status(500).send(validation.messages());

    const body = request.only(["motive", "date", "time"]);

    const slotAvailable = await Schedule.isAvailable(body.date, body.time);
    if (!slotAvailable)
      return response.status(409).send({ error: "Slot not available" });

    const user = await User.findBy("email", request.only(["email"]).email);
    const schedule = await Schedule.create({ ...body, user_id: user.id });

    response.send(schedule);
  }

  async nextAvailable({ request, response }) {
    const rules = {
      date: "required|string",
      time: "required|string",
    };

    const validation = await validate(request.all(), rules);
    if (validation.fails())
      return response.status(500).send(validation.messages());

    const { date, time } = request.get();
    const nextSchedule = await Schedule.nextAvailable(date, time);

    response.send({ nextAvailable: nextSchedule });
  }

  async cancel({ request, response, params }) {
    const validation = await validate(params, { id: "required" });
    if (validation.fails())
      return response.status(500).send(validation.messages());

    const { id } = params;
    const schedule = Database.table("schedules")
      .where("id", id)
      .update("status", "CANCELED");

    response.status(200).send(JSON.stringify(schedule));
  }
}

module.exports = ScheduleController;
