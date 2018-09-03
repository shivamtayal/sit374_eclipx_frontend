import React, { Component } from 'react';
import './detail.css';
import {Link} from 'react-router-dom';

//const mock = require('./');

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

    componentDidMount(){
        this.initialiseData();
      }

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

    updateInput(key, value) {
        this.setState({ [key]: value });
        localStorage.setItem(key, value);
    }
    
    addItem(idEdit) {
        const editID = idEdit
        const list = [...this.state.list];
        const updatedList = list.filter(item => item.id !== editID);
    
        this.setState({ list: updatedList });
    
        localStorage.setItem("list", JSON.stringify(updatedList));
    
        const newRecall = {
          id: 1 + Math.random(),
          manufacturer: this.state.manufacturer,
          model: this.state.model,
          year: this.state.year,
          vin: this.state.vin
        };
    
        updatedList.push(newRecall);
    
        this.setState({
          list,
          newRecall: "",
          manufacturer: "",
          model: "",
          year: "",
          vin: ""
        });
        
        localStorage.setItem("list", JSON.stringify(updatedList));
        localStorage.setItem("manufacturer", "");
        localStorage.setItem("model", "");
        localStorage.setItem("year", "");
        localStorage.setItem("vin", "");
      }

      editRecall(id,manuf,mod,yr,vin,reg,vid,des,nm,cnum,em,org,orgc,orge,orgn) {
        const editID = id;
        const manufacturer = manuf;
        const model = mod;
        const year = yr;
        const vinNumber = vin;
        const rego = reg;
        const vehid = vid;
        const desc = des;
        const nme = nm;
        const connum = cnum;
        const ema = em;
        const organ = org;
        const orgcon = orgc;
        const orgem = orge;
        const orgnum = orgn
        localStorage.setItem("editID", editID);
        localStorage.setItem("manufacturer", manufacturer);
        localStorage.setItem("model", model);
        localStorage.setItem("year", year);
        localStorage.setItem("vin", vinNumber);
        localStorage.setItem("registration", rego)
        localStorage.setItem("vehicleId", vehid)
        localStorage.setItem("description", desc)
        localStorage.setItem("name", nme)
        localStorage.setItem("contactNumber", connum)
        localStorage.setItem("email", ema)
        localStorage.setItem("organisation", organ)
        localStorage.setItem("orgContact", orgcon)
        localStorage.setItem("orgEmail", orgem)
        localStorage.setItem("orgNumber", orgnum)
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