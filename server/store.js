import { createStore, applyMiddleware, compose } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunkMiddleware from 'redux-thunk';
import axios from 'axios';
import getRootUrl from '../lib/api/getRootUrl';

const initialState = {
  lastUpdate: 0,
  light: false,
  user: 0,
  agent: 0,
};

export const actionTypes = {
  TICK: 'TICK',
  FETCH_USER: 'FETCH_USER',
  USER_AGENT: 'USER_AGENT',
  REDUX_FORM: 'REDUX_FORM',
};

// REDUCERS
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TICK:
      return Object.assign({}, state, { lastUpdate: action.ts, light: !!action.light });
    case actionTypes.FETCH_USER:
      return Object.assign({}, state, { user: action.payload });
    case actionTypes.USER_AGENT:
      return Object.assign({}, state, { agent: action.payload });
    case actionTypes.REDUX_FORM:
      return Object.assign({}, state, { form: formReducer });
    default: return state;
  }
};

// ACTIONS
export const fetchUser = () => async (dispatch) => {
  const ROOT_URL = getRootUrl();
  const resUser = await axios.get(`${ROOT_URL}/api/current_user`);
  dispatch({ type: actionTypes.FETCH_USER, payload: resUser.data });
};

export const getUserAgent = () => async (dispatch) => {
  const ROOT_URL = getRootUrl();
  const resAgent = await axios.get(`${ROOT_URL}/api/useragent`);
  dispatch({ type: actionTypes.USER_AGENT, payload: resAgent.data });
};

export const submitForm = formName => dispatch =>
  dispatch({ type: actionTypes.REDUX_FORM, form: formName });

export const serverRenderClock = isServer => dispatch =>
  dispatch({ type: actionTypes.TICK, light: !isServer, ts: Date.now() });

export const startClock = () => dispatch =>
  setInterval(() => dispatch({ type: actionTypes.TICK, light: true, ts: Date.now() }), 1000);

export const initStore = (newInitialState = initialState) =>
  createStore(reducer, newInitialState, compose(applyMiddleware(thunkMiddleware)));
