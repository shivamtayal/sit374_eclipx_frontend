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
                        <span className="badge badge-dark">{this.props.vin ? this.props.vin : 'N/A'}</span>
                    </div>
                    <div className="col result-group">
                        <span className="badge badge-dark">{this.props.manufacturer ? this.props.manufacturer : 'N/A'}</span>
                    </div>
                    <div className="col result-group">
                        <span className="badge badge-dark">{this.props.make ? this.props.make : 'N/A'}</span>
                    </div>
                    <div className="col result-group">
                        <span className="badge badge-dark">{this.props.year ? this.props.year : 'N/A'}</span>
                    </div>
                    <div className="col result-group">
                        <span className="badge badge-dark">{this.props.registration ? this.props.registration : 'N/A'}</span>
                    </div>
                    <div className="col result-group">
                        <span className="badge badge-dark">{this.props.recallCount ? this.props.recallCount : '0'}</span>
                    </div>
                    <div className="col result-group">
                        <p>{this.props.active ? <span className="badge badge-success">Yes</span> : <span className="badge badge-danger">No</span>}</p>
                    </div>
                </div>
            </li>
            </Link>
        );
    }
}

export default VehicleSlim;