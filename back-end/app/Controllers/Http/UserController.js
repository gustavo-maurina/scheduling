"use strict";

const User = use("App/Models/User");
const { validate } = use("Validator");

class UserController {
  async createUser({ request, response }) {
    const rules = {
      name: "required|string",
      surname: "required|string",
      phone: "required|string",
      email: "required|string|unique:users",
    };

    const validation = await validate(request.all(), rules);

    if (validation.fails())
      return response.status(500).send(validation.messages());

    const user = await User.create(
      request.only(["name", "surname", "email", "phone"])
    );

    return user;
  }
}

module.exports = UserController;
