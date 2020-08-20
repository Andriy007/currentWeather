import * as types from "./boardActionsTypes";

export const initialState = {
  item: undefined,
};

const boardItems = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_ITEMS_SUCCESS: {
      return {
        item: {...action.response}
      }
    }
    default:
      return state;
  }
};

export default boardItems;
