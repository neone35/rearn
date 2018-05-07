import Router from 'next/router';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunkMiddleware from 'redux-thunk';
import axios from 'axios';
import getRootUrl from '../lib/api/getRootUrl';

const ROOT_URL = getRootUrl();

const initialState = {
  authReducer: '0',
  agentReducer: '0',
};

const actionTypes = {
  FETCH_USER: 'FETCH_USER',
  USER_AGENT: 'USER_AGENT',
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

const rootReducer = combineReducers({
  authReducer,
  agentReducer,
  form: formReducer,
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

export const submitSet = values => async (dispatch) => {
  const res = await axios.post(`${ROOT_URL}/api/newset`, values);
  Router.push('/');
  dispatch({ type: actionTypes.FETCH_USER, payload: res.data });
};

export const initStore = (newInitialState = initialState) =>
  createStore(rootReducer, newInitialState, compose(applyMiddleware(thunkMiddleware)));
