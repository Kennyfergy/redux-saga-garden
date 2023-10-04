import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";

function* fetchPlantsSaga() {
  try {
    const response = yield axios({
      method: "GET",
      url: "/api/plant",
    });
    //console.log(response);
    yield put({ type: "SET_PLANTS", payload: response.data });
  } catch (error) {
    console.log(error);
  }
}

function* addPlantSaga(action) {
  try {
    yield axios({
      method: "POST",
      url: "/api/plant",
      data: action.payload,
    });

    yield put({ type: "FETCH_PLANTS" });
  } catch (error) {
    console.log(error);
  }
}

function* deletePlantSaga(action) {
  try {
    yield axios({
      method: "DELETE",
      url: `/api/plant/${action.payload}`,
    });

    yield put({ type: "FETCH_PLANTS" });
  } catch (error) {
    console.log(error);
  }
}

export default function* () {
  yield takeEvery("FETCH_PLANTS", fetchPlantsSaga);
  yield takeEvery("ADD_PLANT", addPlantSaga);
  yield takeEvery("DELETE_PLANT", deletePlantSaga);
}
