const getFormattedDate = require("./getFormattedDate");

function incrementOneDay(date) {
  let tomorrow = new Date(date);
  tomorrow.setDate(tomorrow.getDate() + 1);

  return getFormattedDate(tomorrow);
}

module.exports = incrementOneDay;
