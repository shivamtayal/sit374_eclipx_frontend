import React, { Component } from 'react';
import './fleet.css';

class FleetDrill extends Component {
    constructor(props){
        super(props);
        const fleet_id = props.match.params.fleet_id;
        this.fleet_id = fleet_id;
    }

    getRecallById(id){
        return {
            id: '2',
            year: '2002',
            model: 'City',
            recalled_on: '15/07/2018'
        }
    }

    render() {
        let recall_data = this.getRecallById(null);
        return (
            <div className="app-fleet-drill">
                <div className="recalled-vehicles">
                    <h1>Year: {recall_data.year}</h1>
                    <h1>Model: {recall_data.model}</h1>
                    <code>
                        EDIT RECALL PANEL GOES HERE
                    </code>
                </div>
            </div>
        );
    }
}

export default FleetDrill;