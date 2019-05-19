import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* Types & Action Creators */

const { Types, Creators } = createActions({
  getUsersRequest: null,
  getUsersSuccess: ["data"],
  getUserFromIdRequest: ["id"],
  getUserFromIdSuccess: ["dataUser"],
  newUserRequest: ["data"],
  newUserSuccess: ["dataUser"],
  updateUserRequest: ["data"],
  updateUserSuccess: ["dataUser"],
  clearDataUser: null
});

export const UserTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  data: [],
  dataUser: [],
  loading: false
});

/* Reducers */

export const request = state =>
  state.merge({
    loading: true
  });
export const success = (state, { data }) =>
  state.merge({ data, loading: false });

export const requestUserFromId = state =>
  state.merge({
    loading: true
  });

export const requestUserFromSuccess = (state, { dataUser }) =>
  state.merge({ dataUser, loading: false });

export const requestNewUser = state =>
  state.merge({
    loading: true
  });

export const successNewUser = (state, { dataUser }) =>
  state.merge({ dataUser, loading: false });

export const requestUpdateUser = state =>
  state.merge({
    loading: true
  });

export const successUpdateUser = (state, { dataUser }) =>
  state.merge({ dataUser, loading: false });

export const clearDataUser = state => state.merge({ dataUser: [] });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_USERS_REQUEST]: request,
  [Types.GET_USERS_SUCCESS]: success,
  [Types.GET_USER_FROM_ID_REQUEST]: requestUserFromId,
  [Types.GET_USER_FROM_ID_SUCCESS]: requestUserFromSuccess,
  [Types.NEW_USER_REQUEST]: requestNewUser,
  [Types.NEW_USER_SUCCESS]: successNewUser,
  [Types.UPDATE_USER_REQUEST]: requestUpdateUser,
  [Types.UPDATE_USER_SUCCESS]: successUpdateUser,
  [Types.CLEAR_DATA_USER]: clearDataUser
});
