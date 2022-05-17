export function getCurrentTime() {
  const date = new Date();

  return `${date.getHours() > 17 ? "09" : date.getHours()}:00:00`;
}
