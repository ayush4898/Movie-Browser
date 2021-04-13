import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import './index.css';
import App from './component/App';
import {movie} from './reducers'

const store = createStore(movie);
// console.log('STORE', store);

ReactDOM.render(
    <App store={store}/>
,  document.getElementById('root')
);
