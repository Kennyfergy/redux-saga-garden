import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";

function* fetchPlantsSaga() {
  try {
    const response = yield axios({
      method: "GET",
      url: "/api/plant",
    });
    // console.log(response.data);
    yield put({ type: "SET_PLANTS", payload: response.data });
  } catch (error) {
    console.log(error);
  }
}

export default function* () {
  yield takeEvery("FETCH_PLANTS", fetchPlantsSaga);
}
