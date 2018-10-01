import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './recalls.css';

class RecallSlim extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (     
            <Link className="recall-item-link" to={`/recall/${this.props.id}`}>
            <li className="list-group-item">
                <div className="row">
                    {/*this.props.automatic ? <i className="fas fa-exclamation-circle fa-1x automatic"></i> : null */}
                    <div className="col result-group">
                        <h5><span class="badge badge-secondary">Manufacturer</span></h5>
                        <p>{this.props.manufacturer ? this.props.manufacturer : 'N/A'}</p>
                    </div>
                    <div className="col result-group">
                        <h5><span class="badge badge-secondary">Make</span></h5>
                        <p>{this.props.make ? this.props.make : 'N/A'}</p>
                    </div>
                    <div className="col result-group">
                        <h5><span class="badge badge-secondary">Year</span></h5>
                        <p>{this.props.year ? this.props.year : 'N/A'}</p>
                    </div>
                    <div className="col result-group">
                        <h5><span class="badge badge-secondary">Registration</span></h5>
                        <p>{this.props.registration ? this.props.registration : 'N/A'}</p>
                    </div>
                </div>
            </li>
            </Link>
        );
    }
}

export default RecallSlim;