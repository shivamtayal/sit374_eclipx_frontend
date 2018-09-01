import React, { Component } from 'react';

import './detail.css';

//const mock = require('./');

class View extends Component {

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
                                <td>WBAZW420700B67949</td>
                                <th>Name</th>
                                <td>Jeremy Dkes</td>
                            </tr>
                            <tr>
                                <th>Registration</th>
                                <td>SUE482</td>
                                <th>Contact Number</th>
                                <td>04 1234 5678</td>
                            </tr>
                            <tr>
                                <th>MAKE</th>
                                <td>BMW</td>
                                <th>Email</th>
                                <td>Driver@gmail.com</td>
                            </tr>
                            <tr>
                                <th>Model</th>
                                <td>x5</td>
                                <th>Organisation</th>
                                <td>Sydney in Home</td>
                            </tr>
                            <tr>
                                <th>Model Year</th>
                                <td>BMW</td>
                                <th>Org-Contact</th>
                                <td>Fleet Manager</td>
                            </tr>
                            <tr>
                                <th>FP Vehicle ID</th>
                                <td>AAAM1215</td>
                                <th>Org-Email</th>
                                <td>driver@sihc.com.au</td>
                            </tr>
                            <tr>
                                <th>Description</th>
                                <td>BMW X5 E70 xDrive30d Executive Pack Steptronic 4x4</td>
                                <th>Org-Number</th>
                                <td>02 1234 5678</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="detail-tabs">
                    <ul className="nav nav-tabs" id="detailTabs" role="tablist">
                        <li className="nav-item">
                            <a id="recalls-tab active" data-toggle="tab" href="#recalls" role="tab" aria-controls="recalls" aria-selected="true"><a>RECALLS</a></a>
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