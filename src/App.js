import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import './App.css';

import Nav from './components/navigation/navigation';
import Home from './components/home';
import Recalls from './components/recalls/recalls';
import FleetDrill from './components/recalls/drill_fleet';
import Search from './components/search/search';
import Detail from './components/detail/detail';
import addRecall from './components/recalls/addRecall';
import editRecall from './components/editRecall/editRecall';
import addCampaign from './components/addCampaign/addCampaign';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Nav/>
          <div className="app-components">
          <Route exact path='/' component={Home} />
          <Route path='/recall/:fleet_id' component={FleetDrill} />
          <Route path='/recalls' component={Recalls} />
          <Route path='/search' component={Search} />
          <Route path='/detail' component={Detail} />
          <Route path='/addrecall' component={addRecall} />
          <Route path='/editRecall' component={editRecall} />
          <Route path='/addCampaign' component={addCampaign} />      
          </div>
      </div>
    );
  }
}

export default App;
