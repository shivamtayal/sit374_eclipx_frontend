import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Nav from './components/navigation/navigation';
import Home from './components/home';
import Recalls from './components/fleet/recalls';
import FleetDrill from './components/fleet/drill_fleet';
import Search from './components/search/search';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Nav/>
          <Route exact path='/' component={Home} />
          <Route path='/recall/:fleet_id' component={FleetDrill} />
          <Route path='/recalls' component={Recalls} />
          <Route path='/search' component={Search} />
      </div>
    );
  }
}

export default App;