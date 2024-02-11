export const getBookingDays = (startDate, endDate) => {
  const oneDay = 24 * 60 * 60 * 1000;

  const firstDate = new Date(startDate);
  const secondDate = new Date(endDate);

  return Math.round(Math.abs((firstDate - secondDate) / oneDay));
};
