import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunkMiddleware from 'redux-thunk';
import axios from 'axios';
import getRootUrl from '../lib/api/getRootUrl';

const initialState = {
  user: '0',
  agent: '0',
};

export const actionTypes = {
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

export const rootReducer = combineReducers({
  user: authReducer,
  agent: agentReducer,
  form: formReducer,
});

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

export const initStore = (newInitialState = initialState) =>
  createStore(rootReducer, newInitialState, compose(applyMiddleware(thunkMiddleware)));
