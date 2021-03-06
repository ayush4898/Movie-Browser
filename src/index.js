import React, { createContext } from 'react';
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

export const StoreContext = createContext();

class Provider extends React.Component{
    render()
    {
        const { store } = this.props;
        return <StoreContext.Provider value = {store}>
          {this.props.children}
        </StoreContext.Provider>
    }
}



ReactDOM.render(
    <Provider store={store}>
        <App store={store} />
        {/* note the props store is not needed to pass without this itll work */}
    </Provider>
,  document.getElementById('root')
);
