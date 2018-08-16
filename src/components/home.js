import React, { Component } from 'react';

const axios = require('axios');
const cheerio = require('cheerio');

class Home extends Component {

  recall_list = [];
  manufacturer = 0;


  componentDidMount(){
    this.scrapeACCC();
  }

  scrapeACCC(){
      axios.get('https://www.productsafety.gov.au/recalls/compulsory-takata-airbag-recall/takata-airbag-recalls-list').then(res => {
          const $ = cheerio.load(res.data);
          this.buildList($);
      })
  }

  buildList($){
      $('.table-takata-recalls tbody tr').each((i, e) => {
        if($(e).hasClass('table-header')){
          this.handleManufacturer($(e));
        }
        $(e.children).each((i, e) => {
          if($(e).get(0).tagName == 'td'){
            this.handleRecall($(e));
            //data[k].recalls.push($(e).text())
          }
        })
      })
      console.log(this.recall_list);
  }

  handleManufacturer(element){
    let manufacturer = element.text();
    if(manufacturer){
      this.recall_list[this.manufacturer] = {
        "manufacturer": manufacturer.trim(),
        recalls: []
      }
      this.manufacturer++;
    }
  }

  handleRecall(element, manufacturer_to_work_on){
    console.log(element.text().trim())
  }

  render() {
    return (
        <div className="home">
            <h1>SIT374</h1>
        </div>
    );
  }
}

export default Home;