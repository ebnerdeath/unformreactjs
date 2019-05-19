import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import UserActions from "../ducks/user";

export function* getUsers() {
  const response = yield call(api.get, "users");

  yield put(UserActions.getUsersSuccess(response.data));
}

export function* getUserFromId({ id }) {
  const response = yield call(api.get, `user/${id}`);
  var responseModified = {
    name: response.data.name,
    username: response.data.username,
    email: response.data.email,
    address: {
      street: response.data.street,
      number: response.data.number
    }
  };
  yield put(UserActions.getUserFromIdSuccess(responseModified));
}

export function* newUser(action) {
  yield call(api.post, "user", action.data);
  yield getUsers();
  yield put(UserActions.newUserSuccess({}));
}

export function* updateUser(action) {
  yield call(api.put, `user/${action.data.id}`, action.data);
  yield getUsers();
  yield put(UserActions.newUserSuccess({}));
}
