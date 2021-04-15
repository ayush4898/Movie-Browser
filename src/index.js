import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './component/App';
import  rootReducer  from './reducers'

// middleware is placed between dispatch and reducer 
let logger = store => next => (action) => {
    if(typeof(action) !== 'function')
    console.log('action.type :',action.type);
    next(action);
}
    


const store = createStore(rootReducer,applyMiddleware(logger , thunk));
// console.log('STORE', store);n
ReactDOM.render(
    <App store={store}/>
,  document.getElementById('root')
);
