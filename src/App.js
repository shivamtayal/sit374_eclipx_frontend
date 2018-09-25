import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import './App.css';

import Nav from './components/navigation/navigation';
import Home from './components/home';
import RecallManager from './components/recallManager/recallManager';
import Recalls from './components/recalls/recalls';
import RecallSingle from './components/recallManager/recallDrilled';
import AddRecall from './components/recallManager/addRecall';
import AddCampaign from './components/addCampaign/addCampaign';
import Campaigns from './components/campaigns/campaigns';
import Vehicles from './components/vehicles/vehicles';
import RecallEdit from './components/recalls/recallEdit';
import CampaignSingle from "./components/campaigns/campaignSingle";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Nav/>
          <div className="app-components">
          <Route exact path='/' component={Home} />
          <Route path='/recalls' component={Recalls} />
          <Route path='/recall/:id' component={RecallSingle} />
          <Route path='/edit/recall/:id' component={RecallEdit}/>
          <Route path='/recall-manager' component={RecallManager} />
          <Route path='/add-recall' component={AddRecall} />
          <Route path='/add-campaign' component={AddCampaign} />
          <Route path='/campaigns' component={Campaigns} />
          <Route path='/campaign/:id' component={CampaignSingle} />
          <Route path='/vehicles' component={Vehicles} />
          </div>
      </div>
    );
  }
}

export default App;
