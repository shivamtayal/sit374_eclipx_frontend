import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Persistor from '../../util/persistor';
import {RecallItem} from "../../models/RecallItem";

import './recallManager.css';

const axios = require('axios');
const cheerio = require('cheerio');

class RecallManager extends Component {

    constructor(props){
        super(props);
        this.state = {
            findingRecalls: false,
            foundRecalls: null,
            ran: false,
            error: null
        };

        this.getRecallsAutomatically = this.getRecallsAutomatically.bind(this);
    }

    componentDidMount(){
        let ran = localStorage.getItem('ran_automatic');
        if(ran){
            this.setState({ran: true});
            return true;
        }
    }

    getRecallsAutomatically(){
        let ran = localStorage.getItem('ran_automatic');
        if(ran){
            return true;
        }
        localStorage.setItem('ran_automatic', true);
        this.setState({findingRecalls: true});
        axios.get('https://www.productsafety.gov.au/recalls/compulsory-takata-airbag-recall/takata-airbag-recalls-list').then(res => {
            let $ = cheerio.load(res.data);
            
            $('.table-takata-recalls tbody tr').each((i, e) => {

                if($(e).hasClass('table-header') && $(e).text()){
                    RecallItem.meta.vehicle.manufacturer = $(e).text().trim();
                    $(e).nextUntil('.table-header').each((i, e) => {
                        if(e.type == 'tag'){
                            $(e.children).each((i, e) => {
                                if(e.type == 'tag'){
                                    if (i == 1){
                                        RecallItem.meta.vehicle.make = $(e).text().trim();
                                    } else if (i == 3) {
                                        RecallItem.meta.vehicle.year = $(e).text().trim();
                                    } else if (i == 5){
                                        RecallItem.meta.vehicle.vehicleID = $(e).text().trim();
                                        RecallItem.id = Persistor.generateId();
                                        RecallItem.automatic = true;
                                        Persistor.addRecall(RecallItem)
                                    }
                                }
                            })
                        }
                    })
                }
            });

            this.setState({findingRecalls: false, foundRecalls: true});
        }).catch(err => {
            this.setState({findingRecalls: false, foundRecalls: false, error: err});
        })
    }

    render() {
        if(this.state.foundRecalls === true){
            var alert = <div className="alert alert-success">Found Recalls</div>
        } else if (this.state.foundRecalls === false){
            var alert = <div className="alert alert-danger">{this.state.error.message}</div>
        }

        return (
            <div className="app-fleet">
                <div className="recall-manager">
                    <h1>Recall Manager</h1>
                    <h3>{`Found ${Persistor.getRecallCount()} recalls`}</h3>
                    <br/>
                    {alert}
                    <hr/>
                    <br/>
                    <div className="row">
                        <div className="col">
                            <div className="manager-group">
                            <h5>Automatic Recall Finder</h5>
                            <button className="btn btn-outline-dark" onClick={this.getRecallsAutomatically} disabled={this.state.ran}>Get Recalls</button>
                            </div>
                        </div>
                        <div className="col">
                            <div className="manager-group">
                            <h5>Manually Add Recall</h5>
                            <Link className="route-linker btn btn-outline-dark" to="/add-recall">Add Recall</Link>
                            </div>
                        </div>
                        <div className="col">
                            <div className="manager-group">
                            <h5>Manually Add Campaign</h5>
                            <Link className="route-linker btn btn-outline-dark" to="/add-campaign">Add campaign</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RecallManager;