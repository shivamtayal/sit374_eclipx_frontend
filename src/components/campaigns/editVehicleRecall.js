import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Persistor from '../../util/persistor';

class editVehicleRecall extends Component{
    constructor(props){
        super(props);

        let recall = Persistor.getVehicleRecallById(props.match.params.id)[0];
        
        this.state = {
            id: props.match.params.id,
            recallItem: recall,
            rectified: recall.meta.rectified,
            rectifiedDate: recall.meta.rectifiedDate,
            PRANumber: recall.meta.PRANumber,
            active: recall.meta.active,
            campaignNumber: recall.meta.campaignNumber,
            datePublished: recall.meta.datePublished,
            description: recall.meta.description,
            manufacturer: recall.meta.manufacturer,
            priority: recall.meta.priority,
            vin: recall.meta.vin
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
        let recallItem =  {
            id: this.state.id,
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
                rectified: this.state.rectified,
                rectifiedDate: this.state.rectifiedDate
            }
        };

        this.setState({submitted: true});
        Persistor.updateVehicleRecall(this.state.id, recallItem);
    }

    render(){
        const data = this.state.recallItem.meta;

        return(
            <div className="recall-edit">
            { this.state.submitted ? <div className="alert alert-success">Successfully Modified Recall</div> : null}
            <h1>Edit Recall #{this.state.id}</h1>
            <div className="add-recall">
                <Link className="route-linker btn btn-outline-dark" to={`/view/vehicle-Recall/${this.state.id}`}>Back To Recall</Link>
                <form className="w-50 m-auto" onSubmit={this.handleSubmit}>
                    <div className="form-group addRecall">
                        <h4 className="addRecall-title">Rectification</h4>
                        <select
                        className="form-control"
                        id="rectified"
                        name="rectified"
                        onChange={this.handleChange}
                    >
                        <option defaultValue={true}>Rectified?</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                    </div>
                    <button type="submit" className="btn btn-primary">Save Recall</button>
                </form>
            </div>
        </div>
        )
    }

}

export default editVehicleRecall