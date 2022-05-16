export function getDateOfweekeek(week: number, year: number) {
  let d = 1 + (week - 1) * 7; // 1st of January + 7 days for each weekeek

  return new Date(year, 0, d);
}
