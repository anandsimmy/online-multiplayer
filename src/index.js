import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Game from './components/Game';
import Home from './components/Home'
import firebaseConfigObj from './firebaseconfig'
import reducer from './reducer'
import firebase from 'firebase'

firebase.initializeApp(firebaseConfigObj)
const store= createStore(reducer)

const routes= (
  <BrowserRouter>
      <Route path='/' exact component={Home} />
      <Route path='/game/:token' component={Game} />
  </BrowserRouter>
)

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('root')
);

