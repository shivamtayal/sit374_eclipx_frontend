import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Nav from './components/navigation/navigation';
import Home from './components/home';
import Fleet from './components/fleet/fleet';
import FleetDrill from './components/fleet/drill_fleet';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Nav/>
          <Route exact path='/' component={Home} />
          <Route path='/recall/:fleet_id' component={FleetDrill} />
          <Route path='/recalls' component={Fleet} />
      </div>
    );
  }
}

export default App;