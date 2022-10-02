
import './App.css';
import React from 'react';
import Formdata from './components/Formdata';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import Success from './components/Success';

const App = () => {
  return (
    <div className='App'>
    <BrowserRouter>
    <Switch>
      <Route component={Formdata} path="/" exact={true}/>
      <Route component={Success} path="/success"/>
    </Switch>
    </BrowserRouter>
    </div>
  )
}

export default App


