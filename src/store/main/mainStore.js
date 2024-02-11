import { makeAutoObservable } from "mobx";
import { DEFAULT_FILTERS } from "../../helpers/constants/constants";
import { HOTEL_LIST } from "../../helpers/constants/constants";
import { changeHotelHelper } from "../../helpers/functions/changeHotelHelper/changeHotelHelper";

class MainStore {
  hotels = HOTEL_LIST;
  filters = DEFAULT_FILTERS;
  historyBooking = [];

  constructor() {
    makeAutoObservable(this);
  }

  getHotelById = (id) => {
    return this.hotels.find((item) => +item.id === +id);
  };

  changeHotelList = () => {
    let result = HOTEL_LIST;

    for (const key in this.filters) {
      if (!this.filters[key]) {
        continue;
      }
      result = changeHotelHelper(result, this.filters, key);
    }

    this.hotels = result;
  };

  addFilter = (key, value) => {
    this.filters[key] = value;
  };

  removeFilter = (value) => {
    for (const key in this.filters) {
      if (this.filters[key] === value) {
        this.filters[key] = DEFAULT_FILTERS[key];
      }
    }
    if (Object.values(this.filters).every((item) => !item)) {
      this.hotels = HOTEL_LIST;
    }
  };

  addBooking = (dataBooking) => {
    this.historyBooking.push(dataBooking);
  };
}

export default new MainStore();
