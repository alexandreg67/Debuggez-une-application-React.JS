export const MONTHS = {
  1: "janvier",
  2: "février",
  3: "mars",
  4: "avril",
  5: "mai",
  6: "juin",
  7: "juillet",
  8: "août",
  9: "septembre",
  10: "octobre",
  11: "novembre",
  12: "décembre",
};

// eslint-disable-next-line arrow-body-style
export const getMonth = (date) => {
  // console.log("je suis dans getMonth et je log la date", date.getMonth())
  return MONTHS[date.getMonth() + 1];
}

