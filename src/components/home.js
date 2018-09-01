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
    let manufacturer = '';
    let man_item = 0;
    let temp = [];

      $('.table-takata-recalls tbody tr').each((i, e) => {
        if($(e).hasClass('table-header')){
          manufacturer = $(e).text().trim();
          this.recall_list[man_item] = {
            "manufacturer": manufacturer
          }
          man_item++;
        } else {
          let recall_item = {
            id: 0,
            model: '',
            year: '',
            pra: ''
          };

          $(e).find('td').each((i, e) => {
            if(i == 0){
              recall_item.model = $(e).text().trim(); 
            }
            if(i == 1){
              recall_item.year = $(e).text().trim();
            }
            if(i == 2){
              recall_item.pra = $(e).text().trim();
            }
          })
          temp.push(recall_item);
        }
      })
      console.log(temp);
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
<<<<<<< HEAD
            <h1>SIT374 test</h1>
=======
            <h1>SIT374 changes</h1>
>>>>>>> origin
        </div>
    );
  }
}

export default Home;