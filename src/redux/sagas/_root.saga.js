import { all } from "redux-saga/effects";

import plantSaga from "./plant.saga";

export default function* () {
  yield all([plantSaga()]);
}
