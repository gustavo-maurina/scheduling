"use strict";

class CreateUser {
  get rules() {
    return {
      name: "required",
      surname: "required",
      email: "required|unique:users",
    };
  }

  get messages() {
    return {
      required: "{{ field }} is required.",
      unique: "{{ field }} already exists.",
    };
  }
}

module.exports = CreateUser;
