import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import App from './App';
import Home from './components/Home'
import firebaseConfigObj from './firebaseconfig'
import firebase from 'firebase'

firebase.initializeApp(firebaseConfigObj)

const routes= (
  <BrowserRouter>
      <Route to='/' exact component={Home} />
      <Route path='/game' exact component={App} />
  </BrowserRouter>
)

ReactDOM.render(
  routes,
  document.getElementById('root')
);

