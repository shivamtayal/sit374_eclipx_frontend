import React from 'react';
import {Link} from 'react-router-dom';

export default function Table(props) {
    props = props.state;
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
                                <td>{props.vin}</td>
                                <th>Name</th>
                                <td>{props.name}</td>
                            </tr>
                            <tr>
                                <th>Registration</th>
                                <td>{props.registration}</td>
                                <th>Contact Number</th>
                                <td>04 1234 5678</td>
                            </tr>
                            <tr>
                                <th>MAKE</th>
                                <td>{props.manufacturer}</td>
                                <th>Email</th>
                                <td>{props.email}</td>
                            </tr>
                            <tr>
                                <th>Model</th>
                                <td>{props.model}</td>
                                <th>Organisation</th>
                                <td>{props.organisation}</td>
                            </tr>
                            <tr>
                                <th>Model Year</th>
                                <td>{props.year}</td>
                                <th>Org-Contact</th>
                                <td>{props.orgContact}</td>
                            </tr>
                            <tr>
                                <th>FP Vehicle ID</th>
                                <td>{props.vehicleId}</td>
                                <th>Org-Email</th>
                                <td>{props.orgEmail}</td>
                            </tr>
                            <tr>
                                <th>Description</th>
                                <td>{props.description}</td>
                                <th>Org-Number</th>
                                <td>{props.orgNumber}</td>
                            </tr>
                        </tbody>
                    </table>
                    <br/>
                    <Link to='/editRecall' className="btn btn-outline-primary nav-link">Edit Vehicle</Link>
                    <br/>
                </div>
            </div>
        );

}