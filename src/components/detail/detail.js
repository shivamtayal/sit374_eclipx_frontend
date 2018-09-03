import React, { Component } from 'react';
import './detail.css';
import {Link} from 'react-router-dom';

//const mock = require('./');

//Constructer to initialise our keys to store data.
class View extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newRecall: "",
            manufacturer: "",
            model: "",
            year: "",
            vin: "",
            registration: "",
            vehicleId: "",
            description: "",
            name: "",
            contactNumber: "",
            email: "",
            organisation: "",
            orgContact: "",
            orgEmail: "",
            orgNumber: "",
            editID: "",
            list: [],
            alphabetList: []
        }
    }

    //This starts when the page is loaded. It clears the keys and then runs the initialise data function.
    componentDidMount(){
    //This will refresh data into the keys to enable data to be persistant. As most keys are removed beforehand this will just load the
    //list[] array with stored data.
        this.initialiseData();
      }

    //This function is called when the page is opened. it will read through the keys in this state and check local storage.
    //if it finds matching keys it will check the data and update the state from local storage.  
    initialiseData() {
        for (let key in this.state) {
          if (localStorage.hasOwnProperty(key)) {
            let value = localStorage.getItem(key);
    
            try {
              value = JSON.parse(value);
              this.setState({ [key]: value });
            } catch (e) {
    
              this.setState({ [key]: value });
            }
          }
        }
      }

    render() {
        return (
            <div className="detail">
                <div className="detail-header">
                    <table className="table table-borderless detail-table">
                        <thead>
                            <tr>
                                <th colSpan="2">VEHICLE</th>
                                <th colSpan="2">CUSTODIAN</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>VIN</th>
                                <td>{this.state.vin}</td>
                                <th>Name</th>
                                <td>{this.state.name}</td>
                            </tr>
                            <tr>
                                <th>Registration</th>
                                <td>{this.state.registration}</td>
                                <th>Contact Number</th>
                                <td>04 1234 5678</td>
                            </tr>
                            <tr>
                                <th>MAKE</th>
                                <td>{this.state.manufacturer}</td>
                                <th>Email</th>
                                <td>{this.state.email}</td>
                            </tr>
                            <tr>
                                <th>Model</th>
                                <td>{this.state.model}</td>
                                <th>Organisation</th>
                                <td>{this.state.organisation}</td>
                            </tr>
                            <tr>
                                <th>Model Year</th>
                                <td>{this.state.year}</td>
                                <th>Org-Contact</th>
                                <td>{this.state.orgContact}</td>
                            </tr>
                            <tr>
                                <th>FP Vehicle ID</th>
                                <td>{this.state.vehicleId}</td>
                                <th>Org-Email</th>
                                <td>{this.state.orgEmail}</td>
                            </tr>
                            <tr>
                                <th>Description</th>
                                <td>{this.state.description}</td>
                                <th>Org-Number</th>
                                <td>{this.state.orgNumber}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <Link to='/editRecall' className="nav-link" >Edit</Link>
                <div className="detail-tabs">
                    <ul className="nav nav-tabs" id="detailTabs" role="tablist">
                        <li className="nav-item">
                            <a id="active" data-toggle="tab" href="#recalls" role="tab" aria-controls="recalls" aria-selected="true"><a>RECALLS</a></a>
                        </li>
                        <li className="nav-item">
                            <a id="communciations-tab" data-toggle="tab" href="#communciations" role="tab" aria-controls="communciations" aria-selected="false"><a>COMMUNCIATIONS</a></a>
                        </li>
                        <li className="nav-item">
                            <a id="notes-tab" data-toggle="tab" href="#notes" role="tab" aria-controls="notes" aria-selected="false"><a>NOTES</a></a>
                        </li>
                    </ul>
                    <div className="tab-content" id="detailTabsContent">
                        <div className="tab-pane fade show active" id="recalls" role="tabpanel" aria-labelledby="recalls-tab">
                            <table className="table recalls-table">
                                <thead>
                                    <tr>
                                        <th scope="col"> </th>
                                        <th scope="col">Active Recall?</th>
                                        <th scope="col">Recall Priority</th>
                                        <th scope="col">Recall No</th>
                                        <th scope="col">PRA No</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Rectified?</th>
                                        <th scope="col">Rectification Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>save delete</td>
                                        <td>YES</td>
                                        <td>Alpha</td>
                                        <td>00 26 3701 00</td>
                                        <td>00 26 3701 00</td>
                                        <td>Replace front driveshaft</td>
                                        <td>No</td>
                                        <td>05-01-2018</td>
                                    </tr>
                                    <tr>
                                        <td>update</td>
                                        <td>YES</td>
                                        <td>Beta</td>
                                        <td>00 32 6402 00</td>
                                        <td>00 32 6402 00</td>
                                        <td>Replace drivers airbag</td>
                                        <td>No</td>
                                        <td> </td>
                                    </tr>
                                    <tr>
                                        <td> </td>
                                        <td>YES</td>
                                        <td>Beta</td>
                                        <td>00 72 9301 00</td>
                                        <td>00 72 9301 00</td>
                                        <td>Replace passenger airbag</td>
                                        <td>Yes</td>
                                        <td>04-04-2018</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="tab-pane fade" id="communciations" role="tabpanel" aria-labelledby="communciations-tab">
                            <h1>Communciations</h1>
                            <div className="test">

                            </div>
                        </div>
                        <div className="tab-pane fade" id="notes" role="tabpanel" aria-labelledby="notes-tab">
                            <h1>Notes</h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default View;