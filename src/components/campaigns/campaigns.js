import React, { Component } from 'react';
import CampaignSlim from './campaignSlim';
import Persistor from "../../util/persistor";

const axios = require('axios');
const cheerio = require('cheerio');

class Campaigns extends Component {
    constructor(props) {
        super(props);

        this.state = {
            campaigns: []
        };

        this.getCampaigns = this.getCampaigns.bind(this);
    }

    componentDidMount(){
        let campaigns = Persistor.getCampaigns();
        this.setState({campaigns: campaigns.data});
    }


    getCampaigns() {
        const {campaigns} = this.state;
        if (campaigns) {
            return this.state.campaigns.map((e, i) => {
                return <CampaignSlim key={i} id={e.id} manufacturer={e.meta.manufacturer} campaignNo={e.meta.campaignNumber} pra={e.meta.PRANumber} priority={e.meta.priority} date={e.meta.datePublished}/>
            });
        } else {
            return <div className="alert alert-warning">No Recalls Found</div>
        }
    }

    render() {
        return (
            <div className="campaigns">
                <h1>Campaigns</h1>
                <p>Campaign Board</p>
                <div className="search">
                    {
                        /*
                        <div className="search-actions">
                            <button className="btn btn-primary">Sort By Manufacturer</button>
                            <button className="btn btn-primary">Sort By Make</button>
                            <button className="btn btn-primary">Sort By Model</button>
                            <button className="btn btn-primary">Sort By Year</button>
                        </div>
                        */
                    }
                    <div className="search-results">
                        <hr/>
                        <ul className="list-group">
                            {this.getCampaigns()}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Campaigns;