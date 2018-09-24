import React, { Component } from 'react';

import {Link} from 'react-router-dom';

import './customerVehicles.css';

class customerVehicles extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    checkIfActive(path){
        if(this.state[path]){
            return 'active';
        } else {
            return '';
        }
    }

    render() {
        return (
			<div>
            <div>
                <table className="table table-borderless detail-table">
                    <thead>
                        <tr>
                            <th colSpan="2">Customer</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <td>Mohammed</td>
                        </tr>
                        <tr>
                            <th>Contact Number</th>
                            <td>0499 122 321</td>
                        </tr>
                        <tr>
                            <th>Email</th>
                            <td>malduba@deakin.edu.au</td>
                        </tr>
                        <tr>
                            <th>Organisation</th>
                            <td>Deakin University</td>
                        </tr>
                        <tr>
                            <th>Org-Contact</th>
                            <td>Deakin University Customer Care</td>
                        </tr>
                        <tr>
                            <th>Org-Email</th>
                            <td>contact@deakin.edu.au</td>
                        </tr>
                        <tr>
                            <th>Org-Number</th>
                            <td>(03) 9419 2134</td>
                        </tr>
                    </tbody>
                </table>
                <br/>
                <Link className="btn btn-outline-primary nav-link">Edit Customer</Link>
                <br/>
            </div>

        <div className="detail-vehicles">
            <table className="table vehicles-table">
                <thead id="thead">
                    <tr>
                        <th scope="col"> </th>
                        <th scope="col">VIN</th>
                        <th scope="col">Registration</th>
                        <th scope="col">Make</th>
                        <th scope="col">Model</th>
                        <th scope="col">Model Year</th>
                        <th scope="col">FP Vehicle ID</th>
                        <th scope="col">Description</th>
                    </tr>
                </thead>
                <tbody id="tbody">
                    <tr>
                        <td>save delete</td>
                        <td>WBAZW420700867949</td>
                        <td>BMW</td>
                        <td>X5</td>
                        <td>BMW</td>
                        <td>AAAM1215</td>
                        <td>BMW X5 E70 xDrive30d Executive Pack Stepronic 4x4</td>
                    </tr>
                </tbody>
            </table>
    		</div>
    		</div>
        );
    }
}

export default customerVehicles;
