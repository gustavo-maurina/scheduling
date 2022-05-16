/**
 * Função para converter tipos Date em string formatada
 *
 * @param dateToFormat Data para ser formatada, se não informado, formatada data atual
 * @returns String no formato YYYY-MM-DD
 */
function getFormattedDate(dateToFormat = null) {
  const date = dateToFormat ?? new Date();

  let day = dateToFormat ? date.getDate() + 1 : date.getDate();
  let month = (date.getMonth() + 1).toString();
  const year = date.getFullYear();

  if (parseInt(month) < 10) month = "0" + month;
  if (parseInt(day) < 10) day = "0" + day.toString();

  return `${year}-${month}-${day}`;
}

module.exports = getFormattedDate;
