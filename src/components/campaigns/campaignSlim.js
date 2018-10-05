import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class CampaignSlim extends Component {
    constructor(props){
        super(props);
    }

    getPriorityColour(priority){
        switch (priority) {
            case 'High':
                return 'danger';
            case 'Medium':
                return 'warning';
            case 'Low':
                return 'secondary';
            default:
                return 'dark';
        }
    }

    render(){
        return (
            <Link className="recall-item-link" to={`/edit/campaign/${this.props.id}`}>
                <li className="list-group-item">
                    <div className="row">
                        <div className="col result-group">
                            <span className="badge badge-dark">{this.props.pra ? this.props.pra : 'N/A'}</span>
                        </div>
                        <div className="col result-group">
                            <span className={`badge ` + `badge-${this.getPriorityColour(this.props.priority)}`}>{this.props.priority ? this.props.priority : 'N/A'}</span>
                        </div>
                        <div className="col result-group">
                            <span className="badge badge-dark">{this.props.campaignNo ? this.props.campaignNo : 'N/A'}</span>
                        </div>
                        <div className="col result-group">
                            <span className="badge badge-dark">{this.props.manufacturer ? this.props.manufacturer : 'N/A'}</span>
                        </div>
                        <div className="col result-group">
                            <span className="badge badge-dark">{this.props.date ? new Date(this.props.date).toDateString() : 'N/A'}</span>
                        </div>
                    </div>
                </li>
            </Link>
        );
    }
}

export default CampaignSlim;