export function getTodayDate() {
  const now = new Date();

  let day = now.getDate().toString();
  let month = (now.getMonth() + 1).toString();
  const year = now.getFullYear();

  if (parseInt(month) < 10) month = "0" + month;
  if (parseInt(day) < 10) day = "0" + day;

  return `${year}-${month}-${day}`;
}
