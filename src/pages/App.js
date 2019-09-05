import React from 'react';
import '../css/App.css';

import {BrowserRouter,Route,Switch,} from "react-router-dom";

import Login from '../login/Login'
import Start from "./Start"



function App() {
  return (
    <div className="App">
        <BrowserRouter>
           <Switch>
              <Route exact path="/" component={Login}></Route>  
              <Route path="/start" component={Start}></Route>
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
