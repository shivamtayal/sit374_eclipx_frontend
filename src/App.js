import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import './App.css';

import Nav from './components/navigation/navigation';
import Home from './components/home';
import RecallManager from './components/recallManager/recallManager';
import Vehicles from './components/vehicles/vehicles';
import VehicleSingle from './components/vehicles/vehicleDrilled';
import AddVehicle from './components/vehicles/addVehicle';
import AddCampaign from './components/addCampaign/addCampaign';
import Campaigns from './components/campaigns/campaigns';
import VehicleEdit from './components/vehicles/vehicleEdit';
import CampaignSingle from "./components/campaigns/campaignSingle";
import vehicleRecalls from "./components/campaigns/vehicleRecall";
import editVehicleRecall from "./components/campaigns/editVehicleRecall"
import editCampaign from "./components/campaigns/editCampaign"

class App extends Component {
  render() {
    return (
      <div className="App">
          <Nav/>
          <div className="app-components">
          <Route exact path='/' component={Home} />
          <Route path='/vehicles' component={Vehicles} />
          <Route path='/vehicle/:id' component={VehicleSingle} />
          <Route path='/edit/vehicle/:id' component={VehicleEdit}/>
          <Route path='/recall-manager' component={RecallManager} />
          <Route path='/add-vehicle' component={AddVehicle} />
          <Route path='/add-campaign' component={AddCampaign} />
          <Route path='/campaigns' component={Campaigns} />
          <Route path='/campaign/:id' component={CampaignSingle} />
          <Route path='/view/vehicle-Recall/:id' component={vehicleRecalls}/>
          <Route path='/edit/vehicle-Recall/:id' component={editVehicleRecall}/>
          <Route path='/edit/campaign/:id' component={editCampaign}/>
          </div>
      </div>
    );
  }
}

export default App;
