import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import './App.css';

import Nav from './components/navigation/navigation';
import Home from './components/home';
import RecallManager from './components/recallManager/recallManager';
import Recalls from './components/recalls/recalls';
import FleetDrill from './components/recallManager/drill_fleet';
import Search from './components/search/search';
import Detail from './components/detail/detail';
import addRecall from './components/recallManager/addRecall';
import editRecall from './components/editRecall/editRecall';
import addCampaign from './components/addCampaign/addCampaign';
import searchVehicle from './components/searchVehicle/searchVehicle';
import recallCampaigns from './components/search/recallCampaigns';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Nav/>
          <div className="app-components">
          <Route exact path='/' component={Home} />
          <Route path='/recall/:fleet_id' component={FleetDrill} />
          <Route path='/recall-manager' component={RecallManager} />
          <Route path='/recalls' component={Recalls} />
          <Route path='/search' component={Search} />
          <Route path='/detail' component={Detail} />
          <Route path='/add-recall' component={addRecall} />
          <Route path='/add-campaign' component={addCampaign} />
          <Route path='/editRecall' component={editRecall} />
          <Route path='/searchVehicle' component={searchVehicle} />
          <Route path='/recallCampaigns' component={recallCampaigns} />
          </div>
      </div>
    );
  }
}

export default App;
