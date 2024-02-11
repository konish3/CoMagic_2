import { FILTER_KEY } from "../../constants/constants";

export const changeHotelHelper = (hotels, filters, key) => {
  if (!hotels || !hotels.length) {
    return [];
  }

  return hotels.filter((item) => {
    if (key === FILTER_KEY.CITY) {
      return item.address[key] === filters[key];
    } else if (key === FILTER_KEY.STARS) {
      return +item[key] === +filters[key];
    }
    return +item[key] <= +filters[key];
  });
};
