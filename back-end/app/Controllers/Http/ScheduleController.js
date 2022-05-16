"use strict";

class ScheduleController {
  async createSchedule({ request, response }) {
    const rules = {
      motive: "required|string",
      date: "required|string",
      time: "required|string",
      user_id: "required|integer|in:users,id",
      email: "required|string|unique:users",
    };

    const validation = await validate(request.all(), rules);

    if (validation.fails())
      return response.status(500).send(validation.messages());

    const user = await User.create(request.only(["name", "surname", "email"]));

    return user;
  }
}

module.exports = ScheduleController;
