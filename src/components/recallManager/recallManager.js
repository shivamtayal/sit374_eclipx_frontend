import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Persistor from '../../util/persistor';

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
                    var CampaignItem = {
                        id: '',
                        automatic: false,
                        meta: {
                            priority: 'Medium',
                            datePublished: new Date()
                        },
                    };
                    CampaignItem['meta'].manufacturer = $(e).text().trim();
                    $(e).nextUntil('.table-header').each((i, e) => {
                        if(e.type == 'tag'){
                            $(e.children).each((i, e) => {
                                if(e.type == 'tag'){
                                    if (i == 1){
                                        CampaignItem['meta'].make = $(e).text().trim();
                                    } else if (i == 3) {
                                        CampaignItem['meta'].year = $(e).text().trim();
                                    } else if (i == 5){
                                        CampaignItem['meta'].PRANumber = $(e).text().trim();
                                        CampaignItem.id = Persistor.generateId();
                                        CampaignItem.automatic = true;
                                        Persistor.addCampaign(CampaignItem)
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
                    <h3>{`Found ${Persistor.getRecallCount()} vehicles`}</h3>
                    <br/>
                    {alert}
                    <hr/>
                    <div className="alert alert-warning">Hint! Once you have added a new vehicle, you can navigate to the 'vehicles' tab and view all of the registered vehicles. When you navigate to a specific vehicle, you can view the specific recalls. <br/>For example, a vehicle might have its airbag, and other safety components recalled.</div>
                    <br/>
                    <div className="row">
                        <div className="col">
                            <div className="manager-group">
                            <h5>Automatic Recall Finder</h5>
                            <button className="btn btn-outline-dark" onClick={this.getRecallsAutomatically} disabled={this.state.ran}>Get Vehicle Recalls</button>
                            </div>
                        </div>
                        <div className="col">
                            <div className="manager-group">
                            <h5>Manually Add Vehicle</h5>
                            <Link className="route-linker btn btn-outline-dark" to="/add-vehicle">Add Vehicle</Link>
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