import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Persistor from '../../util/persistor';
import VehicleSlim from '../vehicles/vehicleSlim';

import './vehicles.css';

class VehicleEdit extends Component {
    constructor(props) {
        super(props);

        let recall = Persistor.getRecallById(props.match.params.id)[0];

        this.state = {
            id: props.match.params.id,
            recallItem: recall,
            active: recall.meta.vehicle.active,
            manufacturer: recall.meta.vehicle.manufacturer,
            manuErr:'',
            model: recall.meta.vehicle.model,
            modelErr:'',
            make: recall.meta.vehicle.make,
            makeErr:'',
            year: recall.meta.vehicle.year,
            yearErr:'',
            vin: recall.meta.vehicle.vin,
            vinErr:'',
            registration: recall.meta.vehicle.registration,
            regErr:'',
            vehicleID: recall.meta.vehicle.vehicleID,
            description: recall.meta.vehicle.description,
            name: recall.meta.custodian.name,
            nameErr:'',
            contactNumber: recall.meta.custodian.contactNumber,
            email: recall.meta.custodian.email,
            organization: recall.meta.custodian.organization,
            organizationContact: recall.meta.custodian.organizationContact,
            organizationEmail: recall.meta.custodian.organizationEmail,
            organizationPhone: recall.meta.custodian.organizationPhone,
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const {value, name} = e.target;
        if(name == 'active'){
            if(value == 'true'){
                this.setState({[name]: true});
            } else {
                this.setState({[name]: false});
            }
        } else {
            this.setState({[name]: value});
        }
    }

    handleSubmit(e){
        e.preventDefault();
        if(this.state.manufacturer === ""||this.state.manufacturer === null){
            this.setState({
                manuErr: "* Please input the manufacturer!"
            })
        }  else if(!this.state.manufacturer.match(/^[a-zA-Z]*$/g)){
            this.setState({
                manuErr: "* The value must be letters !"
            })
        }
        if(this.state.model === ""||this.state.model === null) {
            this.setState({
                modelErr: "* Please input the model!"
            })
        } else if(!this.state.model.match(/^[a-zA-Z]$/)){
            this.setState({
                modelErr: "* The value must be letters!"
            })
        }
        if(this.state.make === ""||this.state.make === null) {
            this.setState({
                makeErr: "* Please input the make!"
            })
        }
        if(this.state.year === ""||this.state.year === null) {
            this.setState({
                yearErr: "* Please input the year of the car!"
            })
        } else if(!this.state.year.match(/^[0-9]{4}$/)){
            this.setState({
                yearErr: "* The value must be four integers!"
            })
        }
        if(this.state.vin === ""||this.state.vin === null) {
            this.setState({
                vinErr: "* Please input the VIN of the car!"
            })
        } 
        if(this.state.registration === ""||this.state.registration === null) {
            this.setState({
                regErr: "* Please input the registration!"
            })
        } 
        if(this.state.name === ""||this.state.name === null) {
            this.setState({
                nameErr: "* Please input the name!"
            })
        } else if(!this.state.name.match(/^[a-zA-Z]$/)){
            this.setState({
                nameErr: "* The value must be letters!"
            })
        }
        if(this.state.email === ""||this.state.email === null) {
            this.setState({
                emailErr: "* Please input the email!"
            })
        } 
        else {
        let recallItem =  {
            id: this.state.id,
            meta:
            {
                vehicle: {
                    active: this.state.active,
                    manufacturer: this.state.manufacturer,
                    model: this.state.model,
                    make: this.state.make,
                    year: this.state.year,
                    vin: this.state.vin,
                    registration: this.state.registration,
                    vehicleID: this.state.vehicleID,
                    description: this.state.description
                },
                custodian: {
                    name: this.state.name,
                    contactNumber: this.state.contactNumber,
                    email: this.state.email,
                    organization: this.state.organization,
                    organizationContact: this.state.organizationContact,
                    organizationEmail: this.state.organizationEmail,
                    organizationPhone: this.state.organizationPhone
                }
            }
        };

        this.setState({submitted: true});
        Persistor.updateRecall(this.state.id, recallItem);
    }
    }

    render() {
        var style ={
            color:'red'
        }
        const data = this.state.recallItem.meta;
        return (
            <div className="recall-edit">
                { this.state.submitted ? <div className="alert alert-success">Successfully Modified Vehicle</div> : null}
                <h1>Edit Vehicle #{this.state.id}</h1>
                <div className="add-recall">
                    <Link className="route-linker btn btn-outline-dark" to={`/vehicle/${this.state.id}`}>Back To Vehicle</Link>
                    <form className="w-50 m-auto" onSubmit={this.handleSubmit}>
                        <div className="addRecall">
                            <h4 className="is-active">Active</h4>
                            <div className="form-group">
                                <select className="custom-select" onChange={this.handleChange} name="active">
                                    <option value="true" selected={data.vehicle.active}>Yes</option>
                                    <option value="false" selected={!data.vehicle.active}>No</option>
                                </select>
                            </div>
                            <h4 className="addRecall-title">Vehicle</h4>
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    id="manufacturer"
                                    type="text"
                                    placeholder="Manufacturer"
                                    name='manufacturer'
                                    defaultValue={data.vehicle.manufacturer}
                                    onChange={this.handleChange}
                                />
                                <span style={style}> {this.state.manuErr}</span>
                            </div>
                        <div className="form-group">
                            <input
                                className="form-control"
                                id="model"
                                type="text"
                                placeholder="Model"
                                name='model'
                                defaultValue={data.vehicle.model}
                                onChange={this.handleChange}
                            />
                            <span style={style}> {this.state.modelErr}</span>
                        </div>
                        <div className="form-group">
                            <input
                                className="form-control"
                                id="make"
                                type="text"
                                placeholder="Make"
                                name='make'
                                defaultValue={data.vehicle.make}
                                onChange={this.handleChange}
                            />
                            <span style={style}> {this.state.makeErr}</span>
                        </div>
                        <div className="form-group">
                            <input
                                className="form-control"
                                id="year"
                                type="text"
                                placeholder="Year"
                                name='year'
                                defaultValue={data.vehicle.year}
                                onChange={this.handleChange}
                            />
                            <span style={style}> {this.state.yearErr}</span>
                        </div>
                        <div className="form-group">
                            <input
                                className="form-control"
                                id="vin"
                                type="text"
                                placeholder="VIN"
                                name='vin'
                                defaultValue={data.vehicle.vin}
                                onChange={this.handleChange}
                            /><span style={style}> {this.state.vinErr}</span>
                        </div>
                        <div className="form-group">
                            <input
                                className="form-control"
                                id="registration"
                                type="text"
                                placeholder="Registration"
                                name='registration'
                                defaultValue={data.vehicle.registration}
                                onChange={this.handleChange}
                            />
                            <span style={style}> {this.state.regErr}</span>
                        </div>
                        <div className="form-group">
                            <input
                                className="form-control"
                                id="vehicleId"
                                type="text"
                                placeholder="FP Vehicle ID"
                                name='vehicleID'
                                defaultValue={data.vehicle.vehicleID}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                className="form-control"
                                id="description"
                                type="text"
                                placeholder="Description"
                                name='description'
                                defaultValue={data.vehicle.description}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <h4 className="addRecall-title">Custodian</h4>
                            <input
                                className="form-control"
                                id="name"
                                type="text"
                                placeholder="Name"
                                name='name'
                                defaultValue={data.custodian.name}
                                onChange={this.handleChange}
                            />
                            <span style={style}> {this.state.nameErr}</span>
                        </div>
                        <div className="form-group">
                            <input
                                className="form-control"
                                id="contactNumber"
                                type="text"
                                placeholder="Contact Number"
                                name='contactNumber'
                                defaultValue={data.custodian.contactNumber}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                className="form-control"
                                id="email"
                                type="text"
                                placeholder="Email"
                                name='email'
                                defaultValue={data.custodian.email}
                                onChange={this.handleChange}
                            />
                            <span style={style}> {this.state.emailErr}</span>
                        </div>
                        <div className="form-group">
                            <input
                                className="form-control"
                                id="organisation"
                                type="text"
                                placeholder="Organisation"
                                name='organization'
                                defaultValue={data.custodian.organization}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                className="form-control"
                                id="orgContact"
                                type="text"
                                placeholder="Organization Contact"
                                name='organizationContact'
                                defaultValue={data.custodian.organizationContact}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                className="form-control"
                                id="orgEmail"
                                type="text"
                                placeholder="Organization Email"
                                name='organizationEmail'
                                defaultValue={data.custodian.organizationEmail}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                className="form-control"
                                id="orgNumber"
                                type="text"
                                placeholder="Organization Number"
                                name='organizationPhone'
                                defaultValue={data.custodian.organizationPhone}
                                onChange={this.handleChange}
                            />
                        </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Save Vehicle</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default VehicleEdit;