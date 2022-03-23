export function dateFormat(dat: Date | null) {
  let date = new Date(`${dat}`);
  let currentDate: string | number = date.getDate();
  let currentMonth: string | number = date.getMonth() + 1;
  let currentYear = date.getFullYear();
  if (currentDate < 10) {
    currentDate = `0${currentDate}`;
  }
  if (currentMonth < 10) {
    currentMonth = `0${currentMonth}`;
  }
  return `${currentYear} - ${currentMonth}-${currentDate}`;
}

export function timeFormat(dat: string | null) {
  let date = new Date(`${dat}`);
  return date;
}
