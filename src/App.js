import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, NavLink, Redirect} from 'react-router-dom'

import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import NotFound from './containers/NotFound/NotFound';

class App extends Component {
  render () {
    return (
      <div className="App">
        <BrowserRouter> 
        <div>
          <header className="nav">
              <nav>
                  <ul>
                  <li><NavLink to="/Users" >Users</NavLink></li>
                  <li><NavLink to="/Courses" >Courses</NavLink></li>  
                  </ul>
              </nav>
          </header> 
          <Switch>
            <Route path="/Users" component={Users} />
            <Route path="/Courses" component={Courses} />
            <Redirect from="/all-courses" to="/Courses" />
            <Route render={() => <NotFound />} />
          </Switch>
        </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
