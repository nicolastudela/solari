const months = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC"
];

module.exports = {
  fromDateFormatter: date => `${months[date.getMonth()]} ${date.getFullYear()}`
};
