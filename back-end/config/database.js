"use strict";

/** @type {import('@adonisjs/framework/src/Env')} */
const Env = use("Env");

/** @type {import('@adonisjs/ignitor/src/Helpers')} */
const Helpers = use("Helpers");

module.exports = {
  connection: "pg",

  pg: {
    client: "pg",
    connection: {
      host: "ec2-3-229-11-55.compute-1.amazonaws.com",
      port: "5432",
      user: "adcqqpfhxrupkh",
      password:
        "ae3c1d989b34e3eb562d15676476b58071f52dd9161ed33a4392e75a879b44fe",
      database: "dc8rmo9h7u1gc3",
      ssl: {
        rejectUnauthorized: false,
      },
    },
  },
};
