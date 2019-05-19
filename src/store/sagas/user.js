import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import UserActions from "../ducks/user";

export function* getUsers() {
  console.tron.log("Chamou o getUsers");
  const response = yield call(api.get, "users");

  yield put(UserActions.getUsersSuccess(response.data));
}
