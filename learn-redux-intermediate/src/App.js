import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement,loggedIn} from './actions';

function App() {
  const counter = useSelector(state => state.counter);
  const isLoggedIn = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Hello World, Counter {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement(10))}>-</button>
      <br/>
      <button onClick={() => dispatch(loggedIn())}>LOGIN</button>
      {console.log("isLoggedIn :: " + isLoggedIn )}
      {isLoggedIn ? <h3>Show this valuble info</h3>: ''}
    </div>
  );
}

export default App;
