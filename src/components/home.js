import React, { Component } from 'react';

const axios = require('axios');
const cheerio = require('cheerio');

class Home extends Component {
  componentDidMount(){
    //localStorage.clear();
  }

  render() {
    return (
        <div className="home">
            <h1>Eclipx Recall Manager</h1>
            <p>Welcome to the Eclipx Recall Manager.</p>
        </div>
    );
  }
}

export default Home;