import { combineReducers } from "redux";

import boardItems from "./board/boardReducer"

const rootReducer = combineReducers({
  boardItems
});

export default rootReducer;
