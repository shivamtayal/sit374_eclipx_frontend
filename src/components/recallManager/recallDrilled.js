import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Persistor from '../../util/persistor';

import './recallDrilled.css';

class RecallDrilled extends Component {
    constructor(props){
        super(props);

        this.state = {
            id: props.match.params.id,
            recallItem: Persistor.getRecallById(props.match.params.id)
        };

        this.deleteRecall = this.deleteRecall.bind(this);
    }

    generateNotes(){
        const data = this.state.recallItem[0].notes;
        if(data){

        } else {
            return <div className="alert alert-warning">No Notes Found</div>
        }
    }

    generateCommunications(){
        const data = this.state.recallItem[0].communications;
        if(data){

        } else {
            return <div className="alert alert-warning">No Communications Found</div>
        }
    }

    deleteRecall(){
        Persistor.removeRecall(this.state.id);
    }

    render() {
        const data = this.state.recallItem[0].meta;
        const automatic = this.state.recallItem[0].automatic;

        return (
            <React.Fragment>
                {automatic ? <div className="alert alert-danger">This Recall Was Automatically Identified. <br/>Automatically Identified Recalls Might Manifest Malformed Data.</div> : null }<br/>
                <h1>Recall #{this.state.id}</h1>
                <div className="recall-single">
                    <button className="btn btn-dark" disabled>Add Note</button>
                    <button className="btn btn-dark" disabled>Add Communication</button>
                    <Link className="btn btn-dark" to={`/edit/recall/${this.state.id}`}>Edit Recall</Link>
                    <button className="btn btn-danger" onClick={this.deleteRecall}>Delete Recall</button>
                    <hr/>
                    <div className="row">
                    <div className="col custodian-information">
                        <h2>Custodian</h2>
                        <div className="list-group">
                            <a href="#"
                               className="list-group-item list-group-item-action flex-column align-items-start">
                                <div className="d-flex w-100 justify-content-between">
                                    <h5 className="mb-1">Individual:</h5>
                                </div>
                                <p className="mb-1"><b>Name:</b> {data.custodian.name ? data.custodian.name : 'N/A'}</p>
                            </a>
                            <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                                <div className="d-flex w-100 justify-content-between">
                                    <h5 className="mb-1">Contact Details</h5>
                                </div>
                                <p className="mb-1">
                                    <b>Email:</b> {data.custodian.email ? data.custodian.email : 'N/A'}<br/>
                                    <b>Phone:</b> {data.custodian.contactNumber ? data.custodian.contactNumber : 'N/A'}
                                </p>
                            </a>
                            <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                                <div className="d-flex w-100 justify-content-between">
                                    <h5 className="mb-1">Organization</h5>
                                </div>
                                <p className="mb-1">
                                    <b>Organization:</b> {data.custodian.organization ? data.custodian.organization : 'N/A'}<br/>
                                    <b>Organization Email:</b> {data.custodian.organizationEmail ? data.custodian.organizationEmail : 'N/A'}<br/>
                                    <b>Organization Phone:</b> {data.custodian.organizationPhone ? data.custodian.organizationPhone : 'N/A'}
                                </p>
                            </a>
                        </div>
                    </div>
                    <div className="col vehicle-information">
                        <h2>Vehicle</h2>
                        <div className="list-group">
                            <a href="#"
                               className="list-group-item list-group-item-action flex-column align-items-start">
                                <div className="d-flex w-100 justify-content-between">
                                    <h5 className="mb-1">Manufacturing Details</h5>
                                </div>
                                <p className="mb-1">
                                    <b>Manufacturer:</b> {data.vehicle.manufacturer ? data.vehicle.manufacturer : 'N/A'}<br/>
                                    <b>Model:</b> {data.vehicle.model ? data.vehicle.model : 'N/A'}<br/>
                                    <b>Make:</b> {data.vehicle.make ? data.vehicle.make : 'N/A'}<br/>
                                    <b>Year:</b> {data.vehicle.year ? data.vehicle.year : 'N/A'}
                                </p>
                            </a>
                            <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                                <div className="d-flex w-100 justify-content-between">
                                    <h5 className="mb-1">Vehicle Details</h5>
                                </div>
                                <p className="mb-1">
                                    <b>Registration:</b> {data.vehicle.registration ? data.vehicle.registration : 'N/A'}<br/>
                                    <b>Vehicle ID:</b> {data.vehicle.vehicleID ? data.vehicle.vehicleID : 'N/A'}<br/>
                                    <b>Vehicle Identification Number (VIN):</b> {data.vehicle.vin ? data.vehicle.vin : 'N/A'}<br/>
                                    <b>Vehicle Description:</b> {data.vehicle.description ? data.vehicle.description : 'N/A'}
                                </p>
                            </a>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h2>Notes</h2>
                            <div className="col note-information">
                                <div className="list-group">
                                    {this.generateNotes()}
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <h2>Communications</h2>
                            <div className="col communication-information">
                                <div className="list-group">
                                    {this.generateCommunications()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default RecallDrilled;