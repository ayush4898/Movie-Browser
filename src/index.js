import React from 'react';
import ReactDOM from 'react-dom';
import { createStore , applyMiddleware } from 'redux';

import './index.css';
import App from './component/App';
import  rootReducer  from './reducers'

// middleware is placed between dispatch and reducer 
let logger = store => next => (action) => {
    console.log('action.type :',action.type);
    next(action);
}
    


const store = createStore(rootReducer,applyMiddleware(logger));
// console.log('STORE', store);

ReactDOM.render(
    <App store={store}/>
,  document.getElementById('root')
);
