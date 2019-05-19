import { all, takeLatest } from "redux-saga/effects";

import { getUsers } from "./user";
import { UserTypes } from "../ducks/user";

export default function* rootSaga() {
  return yield all([takeLatest(UserTypes.GET_USERS_REQUEST, getUsers)]);
}
