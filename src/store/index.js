import user from './signup'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// import { combineReducers, configureStore } from '@reduxjs/toolkit';

let reducers = combineReducers({user: user});

// const store = configureStore({reducers: reducers});
const store = () => {
    return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
  };

export default store();