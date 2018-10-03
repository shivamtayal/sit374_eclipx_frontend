import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './vehicles.css';

class VehicleSlim extends Component {
    constructor(props){
        super(props);
    }

    render(){
        console.log(this.props);
        return (     
            <Link className="recall-item-link" to={`/vehicle/${this.props.id}`}>
            <li className="list-group-item">
                <div className="row">
                    {/*this.props.automatic ? <i className="fas fa-exclamation-circle fa-1x automatic"></i> : null */}
                    <div className="col result-group">
                        <h5><span className="badge badge-secondary">Manufacturer</span></h5>
                        <p>{this.props.manufacturer ? this.props.manufacturer : 'N/A'}</p>
                    </div>
                    <div className="col result-group">
                        <h5><span className="badge badge-secondary">Make</span></h5>
                        <p>{this.props.make ? this.props.make : 'N/A'}</p>
                    </div>
                    <div className="col result-group">
                        <h5><span className="badge badge-secondary">Year</span></h5>
                        <p>{this.props.year ? this.props.year : 'N/A'}</p>
                    </div>
                    <div className="col result-group">
                        <h5><span className="badge badge-secondary">Registration</span></h5>
                        <p>{this.props.registration ? this.props.registration : 'N/A'}</p>
                    </div>
                    <div className="col result-group">
                        <h5><span className="badge badge-secondary">Active</span></h5>
                        <p>{this.props.active ? <span className="badge badge-success">Yes</span> : <span className="badge badge-danger">No</span>}</p>
                    </div>
                </div>
            </li>
            </Link>
        );
    }
}

export default VehicleSlim;