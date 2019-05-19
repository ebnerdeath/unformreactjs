import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* Types & Action Creators */

const { Types, Creators } = createActions({
  getUsersRequest: null,
  getUsersSuccess: ["data"]
});

export const UserTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  data: [],
  loading: false
});

/* Reducers */

export const request = state =>
  state.merge({
    loading: true
  });
export const success = (state, { data }) =>
  state.merge({ data, loading: false });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_USERS_REQUEST]: request,
  [Types.GET_USERS_SUCCESS]: success
});
