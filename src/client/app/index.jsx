import React, {Component} from 'react';
import {render} from 'react-dom';
import { createStore } from 'redux';
import { connect } from 'react-redux';
require("../public/css/style.scss");

/*

Boilerplate for any react project w/redux, sass, bootstrap installed
Please don't forget to change your remote origin!!!

Notes: Reducers must be pure functions
        API of store is:          
          Its API is { subscribe, dispatch, getState }.

*/

let store = createStore(counter);

function counter(state = 0, action) {
    switch(action.type){
      case 'INCREMENT': 
        return state + 1
      case 'DECREMENT':
        return state - 1
      default:
        return state
    }
  }

class App extends React.Component {

  render () {
    return (
      <div className='container'>
        <p><span>Counter: {store.getState()} </span></p>
        <button onClick={() => store.dispatch({ type: 'INCREMENT' })}>+</button>
        <button onClick={() => store.dispatch({ type: 'DECREMENT' })}>-</button>
      </div>
      );
  }
}

const renderApp = () => {
  render(<App/>, document.getElementById('app'));
}

store.subscribe(renderApp)
renderApp();

