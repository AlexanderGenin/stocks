export function shortenNumber(labelValue) {
  if (!labelValue) return;
  return Math.abs(Number(labelValue)) >= 1.0e12
    ? (Math.abs(Number(labelValue)) / 1.0e12).toFixed(2) + "T"
    : Math.abs(Number(labelValue)) >= 1.0e9
    ? (Math.abs(Number(labelValue)) / 1.0e9).toFixed(2) + "B"
    : Math.abs(Number(labelValue)) >= 1.0e6
    ? (Math.abs(Number(labelValue)) / 1.0e6).toFixed(2) + "M"
    : Math.abs(Number(labelValue)) >= 1.0e3
    ? (Math.abs(Number(labelValue)) / 1.0e3).toFixed(2) + "K"
    : Math.abs(Number(labelValue));
}

export function toPercentages(number) {
  if (!number) return;
  return (number * 100).toFixed(2) + "%";
}

export function toFixed(number) {
  if (!number) return;
  return number.toFixed(2);
}

export function numberWithCommas(number) {
  if (!number) return;
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function formateDate(date) {
  if (!date) return;
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const d = new Date(date);
  const month = getMonthShortName(d);
  const dateNum = d.getDate();
  const year = d.getYear();
  return `${month} ${dateNum}, ${year}`;
}

export function getMonthShortName(date) {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return monthNames[date.getMonth()];
}
