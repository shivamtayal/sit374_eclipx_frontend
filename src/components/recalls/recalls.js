import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './fleet.css';

const axios = require('axios');
const mock = require('./mock');
const cheerio = require('cheerio');

class Recalls extends Component {
    constructor(props){
        super(props);

        this.state = {
            recalls: true,
            campaigns: false,
            notes: false
        }
    }

    tileToRender(){
        if(this.state.recalls){
            
        } else if (this.state.campaigns){
            return <addCampaign/>
        } else if (this.state.notes){
            
        }
    }

    checkIsActive(type){
        if(this.state[type]){
            return 'active';
        } else {
            return '';
        }
    }

    componentDidMount(){
        axios.get('http://localhost:5000/api/recalled-vehicles').then(res => {
            this.setState({
                data: [JSON.parse(res.data)]
            });
        });
    }

    render() {
        const {data} = this.state;
        let result;
        if(data[0].recalls.length){
            result = data.map((item, index) => {
                return (
                    <div className="recalled-vehicle-section" key={index}>
                        <h2 key={index}>{item.manufacturer}</h2>
                        <ul className="list-group">
                        {item.recalls.map((item, index) => {
                            return (
                                <li className="list-group-item" key={index}>
                                    <div className="row">
                                        <div className="col-3">
                                            View Recall:<br/>
                                            <Link to={"/recall/" + item.id} params={{ id: item.id }}><span className="badge badge-primary">View</span></Link>
                                        </div>
                                        <div className="col-3">
                                            Model: <br/>
                                            <span className="badge badge-dark">{item.model}</span>
                                        </div>
                                        <div className="col-3">
                                            Year: <br/>
                                            <span className="badge badge-dark">{item.year}</span>
                                        </div>
                                        <div className="col-3">
                                            Recalled On:<br/>
                                            <span className="badge badge-warning">{new Date(item.recalled_on).toDateString()}</span>
                                        </div>
                                    </div>
                                </li>
                            )
                        })}
                        </ul>
                    </div>
                )
            });
        }
        
        let recalls = localStorage.getItem('list');
        let recallCountString;
        if(recalls){
            recalls = JSON.parse(recalls);
            recallCountString = `Currently ${recalls.length} Recalls`;
        } else {
            recallCountString = `Currently No Recalls`;
        }

        return (
            <div className="recall-main">
                <div className="card text-center detail-piece">
                    <div className="card-header">
                        <ul className="nav nav-tabs card-header-tabs">
                        <li className="nav-item">
                            <a href="#recalls" className={"nav-link " + this.checkIsActive('recall')} onClick={(e) => {this.setState({recall: true, communications: false, notes: false})}}>Recalls</a>
                        </li>
                        <li className="nav-item">
                            <a href="#campaigns" className={"nav-link " + this.checkIsActive('communications')} onClick={(e) => {this.setState({communications: true, recall: false, notes: false})}}>Campaigns</a>
                        </li>
                        <li className="nav-item">
                            <a href="#notes" className={"nav-link " + this.checkIsActive('notes')} onClick={(e) => {this.setState({notes: true, recall: false, communications: false})}}>Notes</a>
                        </li>
                        </ul>
                    </div>
                    <div className="card-body">
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Recalls;