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
                        Vehicle Identifier:<br/>
                        <span className="badge badge-dark">{this.props.vin ? this.props.vin : 'N/A'}</span>
                    </div>
                    <div className="col result-group">
                        Manufacturer:<br/>
                        <span className="badge badge-dark">{this.props.manufacturer ? this.props.manufacturer : 'N/A'}</span>
                    </div>
                    <div className="col result-group">
                        Vehicle Make:<br/>
                        <span className="badge badge-dark">{this.props.make ? this.props.make : 'N/A'}</span>
                    </div>
                    <div className="col result-group">
                        Vehicle Year:<br/>
                        <span className="badge badge-dark">{this.props.year ? this.props.year : 'N/A'}</span>
                    </div>
                </div>
            </li>
            </Link>
        );
    }
}

export default RecallSlim;