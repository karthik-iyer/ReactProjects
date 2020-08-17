import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';

//Store -> Globalized state


//Action -- describes what you want to do.. increment
//Its a simple function that returns an object
 const increment = () => {
   return {
     type: 'INCREMENT'
   };
 }

 const decrement = () => {
  return {
    type: 'DECREMENT'
  };
}

//Reducer -- How your actions transform your state to next state... Take care of all actions..
const counter = (state = 0, action) => {
  switch(action.type)
  {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
  }
};

let store = createStore(counter);

store.subscribe(() => console.log(store.getState()));


//Dispatch -- Execute action to reducer... dispatch action to reducer
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(decrement());
store.dispatch(decrement());

ReactDOM.render( <App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
