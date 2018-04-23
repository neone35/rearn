import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import axios from 'axios';
import getRootUrl from '../lib/api/getRootUrl';

const initialState = {
  lastUpdate: 0,
  light: false,
  user: 0,
};

export const actionTypes = {
  TICK: 'TICK',
  FETCH_USER: 'FETCH_USER',
};

// REDUCERS
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TICK:
      return Object.assign({}, state, { lastUpdate: action.ts, light: !!action.light });
    case actionTypes.FETCH_USER: {
      return Object.assign({}, state, { user: action.payload });
    }
    default: return state;
  }
};

// ACTIONS
export const fetchUser = () => async (dispatch) => {
  const ROOT_URL = getRootUrl();
  const resUser = await axios.get(`${ROOT_URL}/api/current_user`);
  dispatch({ type: actionTypes.FETCH_USER, payload: resUser.data });
};

export const serverRenderClock = isServer => dispatch =>
  dispatch({ type: actionTypes.TICK, light: !isServer, ts: Date.now() });

export const startClock = () => dispatch =>
  setInterval(() => dispatch({ type: actionTypes.TICK, light: true, ts: Date.now() }), 1000);

export const initStore = (newInitialState = initialState) =>
  createStore(reducer, newInitialState, compose(applyMiddleware(thunkMiddleware)));
