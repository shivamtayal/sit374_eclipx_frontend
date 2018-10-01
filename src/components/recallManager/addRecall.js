import React, {Component} from 'react';
import './addRecall.css';
import {Link} from 'react-router-dom';

import Persistor from '../../util/persistor';

class addRecall extends Component {
    constructor(props) {
        super(props);
        this.state = {
            manufacturer: '',
            model: '',
            make: '',
            year: '',
            vin: '',
            registration: '',
            vehicleID: '',
            description: '',
            name: '',
            contactNumber: '',
            email: '',
            organization: '',
            organizationContact: '',
            organizationEmail: '',
            organizationPhone: '',
            added: false,
            sortManufacturer:'',
            sortMake: '',
            sortYear: '',
            recallCount: '',
            sortActive: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {

    }

    handleChange(e) {
        const {value, name} = e.target;
        this.setState({[name]: value});
    }

    handleSubmit(e){
        e.preventDefault();
        this.setState({added: true});
        let recallItem =  {
            id: Persistor.generateId(),
            meta:
            {
                vehicle: {
                    manufacturer: this.state.manufacturer,
                    model: this.state.model,
                    make: this.state.make,
                    year: this.state.year,
                    vin: this.state.vin,
                    registration: this.state.registration,
                    vehicleID: this.state.vehicleID,
                    description: this.state.description,
                    recallCount : 0,
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
            },
            communications: [
            ],
            notes: [
            ],
            recall: [
            ],
            sortManufacturer : this.state.manufacturer,
            sortMake : this.state.make,
            sortYear : this.state.year,
            sortActive: ''
        };

        Persistor.addRecall(recallItem);
        setTimeout(() => {
            window.location.replace('/recalls');
        }, 1000);
    }

    render() {
        return (
            <div className="add-recall">
                <Link className="route-linker btn btn-outline-dark" to='/recall-manager'>Back To Manager</Link>
                {this.state.added ? <div className="alert alert-success">New Recall Added! Redirecting...</div> : null}
                <br/>
                <form className="w-50 m-auto" onSubmit={this.handleSubmit}>
                    <div className="form-group addRecall">
                        <h4 className="addRecall-title">Vehicle</h4>
                        <input
                            className="form-control"
                            id="manufacturer"
                            type="text"
                            placeholder="Manufacturer"
                            name='manufacturer'
                            onChange={this.handleChange}
                        />

                    </div>
                    <div className="form-group">
                        <input
                            className="form-control"
                            id="model"
                            type="text"
                            placeholder="Model"
                            name='model'
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            className="form-control"
                            id="make"
                            type="text"
                            placeholder="Make"
                            name='make'
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            className="form-control"
                            id="year"
                            type="text"
                            placeholder="Year"
                            name='year'
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            className="form-control"
                            id="vin"
                            type="text"
                            placeholder="VIN"
                            name='vin'
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            className="form-control"
                            id="registration"
                            type="text"
                            placeholder="Registration"
                            name='registration'
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            className="form-control"
                            id="vehicleId"
                            type="text"
                            placeholder="FP Vehicle ID"
                            name='vehicleID'
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
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            className="form-control"
                            id="contactNumber"
                            type="text"
                            placeholder="Contact Number"
                            name='contactNumber'
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
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            className="form-control"
                            id="organisation"
                            type="text"
                            placeholder="Organisation"
                            name='organization'
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
                            onChange={this.handleChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary" disabled={this.state.added}>New Recall</button>
                </form>
            </div>
        );
    }
}

export default addRecall;