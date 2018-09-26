import React, {Component} from 'react';
import Persistor from '../../util/persistor';

import './addCampaign.css';
import {Link} from 'react-router-dom';

class addCampaign extends Component {
    constructor(props) {
        super(props);
        this.state = {
            manufacturer: '',
            newCampaign: '',
            campaignNumber: '',
            PRANumber: '',
            datePublished: '',
            priority: '',
            description: '',
            vin: '',
            active: '',
            submitted: false,
            recalls: [],
            rectified: '',
            rectifiedDate: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        let recalls = Persistor.getRecalls();
        this.setState({recalls: recalls.data});
    }

    handleChange(e) {
        const {value, name} = e.target;
        console.log(name);
        console.log(value);
        this.setState({[name]: value});
    }

    handleSubmit(e) {
        e.preventDefault();
        const newCampaign = {
            id: Persistor.generateId(),
            meta:
                {
                    manufacturer: this.state.manufacturer,
                    campaignNumber: this.state.campaignNumber,
                    PRANumber: this.state.PRANumber,
                    datePublished: this.state.datePublished,
                    priority: this.state.priority,
                    description: this.state.description,
                    vin: this.state.vin,
                    active: this.state.active,
                    rectified: '',
                    rectifiedDate: ''
                }
        };       

        Persistor.addCampaign(newCampaign);
        Persistor.linkRecalls(this.state.vin, newCampaign)
        this.setState({submitted: true});
        setTimeout(() => {
            window.location.replace('/campaigns');
        }, 1000);
    }

    render() {
        return (
            <React.Fragment>
                {this.state.submitted ? <div className="alert alert-success">Successfully Added Campaign. Redirecting...</div> : null }
                <Link className="route-linker btn btn-outline-dark" to='/recall-manager'>Back To Manager</Link>
            <form className="w-50 m-auto" onSubmit={this.handleSubmit}>
                <div className="form-group addCampaign">
                    <h4 className="addRecall-title">Campaign Details</h4>
                    <input
                        className="form-control"
                        id="campaignNumber"
                        type="text"
                        placeholder="Campaign number"
                        name="campaignNumber"
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        className="form-control"
                        id="manufacturer"
                        type="text"
                        placeholder="Manufacturer"
                        name="manufacturer"
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        className="form-control"
                        id="PRANumber"
                        type="text"
                        placeholder="PRA No."
                        name="PRANumber"
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        className="form-control"
                        id="datePublished"
                        type="date"
                        placeholder="Date Published"
                        name="datePublished"
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-group">
                    <textarea
                        className="form-control"
                        id="description"
                        placeholder="Recall Description"
                        name="description"
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        className="form-control"
                        id="vin"
                        type="text"
                        placeholder="Temporary VIN (For testing)"
                        name="vin"
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-group">
                    <select
                        className="form-control"
                        id="priority"
                        name="priority"
                        onChange={this.handleChange}
                    >
                        <option defaultValue={true}>Priority</option>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                </div>
                <div className="form-group">
                    <select
                        className="form-control"
                        id="active"
                        name="active"
                        onChange={this.handleChange}
                    >
                        <option defaultValue={true}>Active Recall?</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </React.Fragment>
        );
    }
}

export default addCampaign;
