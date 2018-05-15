import Router from 'next/router';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunkMiddleware from 'redux-thunk';
import axios from 'axios';
import getRootUrl from '../lib/api/getRootUrl';

const ROOT_URL = getRootUrl();

const initialState = {
  authReducer: 0,
  agentReducer: 0,
  setsReducer: [],
};

const actionTypes = {
  FETCH_USER: 'fetch_user',
  USER_AGENT: 'user_agent',
  FETCH_SETS: 'fetch_sets',
};

// REDUCERS
const authReducer = (state = null, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
};

const agentReducer = (state = null, action) => {
  switch (action.type) {
    case actionTypes.USER_AGENT:
      return action.payload || false;
    default:
      return state;
  }
};

const setsReducer = (state = [], action) => {
  // console.log(action);
  switch (action.type) {
    case actionTypes.FETCH_SETS:
      return action.payload || false;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  authReducer,
  agentReducer,
  form: formReducer,
  setsReducer,
});

// ACTIONS
export const fetchUser = () => async (dispatch) => {
  const resUser = await axios.get(`${ROOT_URL}/api/current_user`);
  dispatch({ type: actionTypes.FETCH_USER, payload: resUser.data });
};

export const getUserAgent = () => async (dispatch) => {
  const resAgent = await axios.get(`${ROOT_URL}/api/useragent`);
  dispatch({ type: actionTypes.USER_AGENT, payload: resAgent.data });
};

export const submitSet = values => async () => {
  await axios.post(`${ROOT_URL}/api/newset`, values);
  Router.push('/');
  // user state (authReducer) update not needed (ex. user credits amount)
  // dispatch({ type: actionTypes.FETCH_USER, payload: res.data });
};

export const fetchSets = () => async (dispatch) => {
  const res = await axios.get(`${ROOT_URL}/api/sets`);
  dispatch({ type: actionTypes.FETCH_SETS, payload: res.data });
};

export const setLastSet = (setTitle, lastTime) => async () => {
  const lastInfo = { setTitle, lastTime };
  await axios.post(`${ROOT_URL}/api/lastset`, lastInfo);
};

export const initStore = (newInitialState = initialState) =>
  createStore(rootReducer, newInitialState, compose(applyMiddleware(thunkMiddleware)));
