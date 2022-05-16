export function isSlotValid(time: string, date: string) {
  const year = parseInt(date.split("-")[0]);
  const month = parseInt(date.split("-")[1]);
  const day = parseInt(date.split("-")[2]);
  const hours = parseInt(time.split(":")[0]);

  const dateValid =
    new Date(year, month, day, hours, 0, 0).getTime() >= new Date().getTime();

  return dateValid;
}
