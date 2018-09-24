import React, { Component } from 'react';

const axios = require('axios');
const cheerio = require('cheerio');

class Vehicles extends Component {
    componentDidMount(){

    }

    render() {
        return (
            <div className="vehicles">
                <h1>Vehicles</h1>
                <p>Vehicle Board</p>
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

                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Vehicles;