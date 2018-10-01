import React, {Component} from 'react';
import Persistor from '../../util/persistor';
import {Link} from 'react-router-dom';

class editCampaign extends Component {
    constructor(props) {
        super(props);

        let campaign = Persistor.getCampaignById(props.match.params.id)[0];

        this.state = {
            campaignItem: campaign,
            id: campaign.id,
            manufacturer: campaign.meta.manufacturer,
            campaignNumber: campaign.meta.campaignNumber,
            PRANumber: campaign.meta.PRANumber,
            datePublished: campaign.meta.datePublished,
            priority: campaign.meta.priority,
            description: campaign.meta.description,
            vin: campaign.meta.vin,
            active: campaign.meta.active,
            rectified: campaign.meta.rectified,
            rectifiedDate: campaign.meta.rectifiedDate,
            year: campaign.meta.year,
            vins: [],
            submitted: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const {value, name} = e.target;
        this.setState({[name]: value});
    }

    handleSubmit(e){
        e.preventDefault();
        this.state.vins = this.state.vin.split("\n")

        let campaignItem =  {
            id: this.state.id,
            meta : {
                manufacturer: this.state.manufacturer,
                campaignNumber: this.state.campaignNumber,
                PRANumber: this.state.PRANumber,
                datePublished: this.state.datePublished,
                priority: this.state.priority,
                description: this.state.description,
                vin: this.state.vin,
                vins: this.state.vins,
                active: this.state.active,
                rectified: 'No',
                rectifiedDate: 'N/A',
                year: this.state.year
            }
        };

        this.setState({submitted: true});
        Persistor.updateCampaign(this.state.id, campaignItem);
        Persistor.updateLinkRecalls(this.state.id, campaignItem);
        Persistor.checkActiveRecalls();
    }

    render(){
        const data = this.state.campaignItem.meta;
        return (
            <React.Fragment>
                {this.state.submitted ? <div className="alert alert-success">Successfully updated campaign</div> : null }
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
                        defaultValue={data.campaignNumber}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        className="form-control"
                        id="manufacturer"
                        type="text"
                        placeholder="Make & model"
                        name="manufacturer"
                        defaultValue={data.manufacturer}
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
                        defaultValue={data.PRANumber}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        className="form-control"
                        id="year"
                        type="text"
                        placeholder="Year Range"
                        name="year"
                        defaultValue={data.year}
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
                        defaultValue={data.datePublished}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-group">
                    <textarea
                        className="form-control"
                        id="description"
                        placeholder="Recall Description"
                        name="description"
                        defaultValue={data.description}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-group">
                    <textarea
                        className="form-control"
                        id="vin"
                        type="text"
                        placeholder="Input VIN seperated by a newline"
                        name="vin"
                        defaultValue={data.vin}
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
                <button type="submit" className="btn btn-primary">Update Recall</button>
            </form>
            </React.Fragment>
        )
    }

}
export default editCampaign;
