import { all, takeLatest } from "redux-saga/effects";

import { getUsers, getUserFromId, newUser, updateUser } from "./user";
import { UserTypes } from "../ducks/user";

export default function* rootSaga() {
  return yield all([
    takeLatest(UserTypes.GET_USERS_REQUEST, getUsers),
    takeLatest(UserTypes.GET_USER_FROM_ID_REQUEST, getUserFromId),
    takeLatest(UserTypes.NEW_USER_REQUEST, newUser),
    takeLatest(UserTypes.UPDATE_USER_REQUEST, updateUser)
  ]);
}
