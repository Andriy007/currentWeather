import * as types from "./boardActionsTypes";

export const fetchWeatherRequest = data => {
  return { type: types.GET_ALL_ITEMS, data };
};
