import React, { Component } from 'react';

const axios = require('axios');

class Home extends Component {

  fetchRecalledVehicles(){
    axios.get('https://www.productsafety.gov.au/recalls/compulsory-takata-airbag-recall/takata-airbag-recalls-list').then(res => {
      let html = res.data;
      let parser = new DOMParser();
      let doc = parser.parseFromString(html, "text/html");
      let table = doc.getElementsByClassName('table-takata-recalls');
      console.log(table);
    }).catch(err => {
      console.log(err);
    })
  }
    
  render() {
      this.fetchRecalledVehicles();
    return (
        <div className="home">
            <h1>SIT374</h1>
        </div>
    );
  }
}

export default Home;