import { all } from "redux-saga/effects";

import boardSaga from "./board/boardSaga"

export default function *rootSaga() {
  yield all([
    boardSaga()
  ]);
}
