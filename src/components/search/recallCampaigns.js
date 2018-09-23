import React, { Component } from 'react';
import './recallCampaigns.css';
import {Link} from 'react-router-dom';

//Constructer to initialise our keys to store data.
class recallCampaigns extends Component {
    constructor(props) {
        super(props);
        this.state = {
            manufacturer: "",
            newCampaign: "",
            campaignNumber: "",
            PRANumber: "",
            datePublished: "",
            priority: "",
            description: "",
            campaignList: []
        };
    }

  //This starts when the page is loaded. It clears the keys and then runs the initialise data function.  
  componentDidMount(){
    localStorage.removeItem("manufacturer")
    localStorage.removeItem("campaignNumber")
    localStorage.removeItem("PRANumber")
    localStorage.removeItem("datePublished")
    localStorage.removeItem("priority")
    localStorage.removeItem("description")
    this.initialiseData();
  }

  //This function is called when the page is opened. it will read through the keys in this state and check local storage.
  //if it finds matching keys it will check the data and update the state from local storage.
  initialiseData() {
    for (let key in this.state) {
      if (localStorage.hasOwnProperty(key)) {
        let value = localStorage.getItem(key);
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          this.setState({ [key]: value });
        }
      }
    }
  }

  //This function will create a new array that sorts the list of recalls alphabetically
  //by manufacturer.
  sortByKey(key) {
      var keyword = key;
      var arraySort = require('array-sort')
      
      if(keyword == this.state.oldKeyWord){
      this.state.alphabetList = arraySort(this.state.list, keyword, {reverse: true})
      this.state.oldKeyWord = "";
      }
      else{
        this.state.alphabetList = arraySort(this.state.list, keyword)
        this.state.oldKeyWord = key;
      }

      this.setState({list: this.state.alphabetList})
  }

  //This function will generate the entry for each recall. It will check if there are any current
  //recalls stored and then display. Else it will display a message indicating no current recalls.
  generateRecalls(){
      if(this.state.campaignList.length >= 1){
          //call the sorting method if there are recalls.
          //this.sortByKey();
        return this.state.campaignList.map(item => {
            return (                       
            <li className="list-group-item" key={item.campaignNumber}>
                <div className="row">
                    <div className="col-2 result-group">
                    <span className="badge badge-secondary">Campaign number</span><br/>
                    <span className="badge badge-light">{item.campaignNumber}</span>
                    </div>
                    <div className="col-2 result-group">
                    <span className="badge badge-secondary">Manufacturer</span><br/>
                    <span className="badge badge-light">{item.manufacturer}</span>
                    </div>
                    <div className="col-2 result-group">
                    <span className="badge badge-secondary">PRA No.</span><br/>
                    <span className="badge badge-light">{item.PRANumber}</span>
                    </div>
                    <div className="col-2 result-group">
                    <span className="badge badge-secondary">Priority</span><br/>
                    <span className="badge badge-light">{item.priority}</span>
                    </div>
                    <div className="col-2 result-group">
                    <span className="badge badge-secondary">Description</span><br/>
                    <span className="badge badge-light">{item.description}</span>
                    </div>
                </div>
            </li>
                );
            })
      } else {
          return (
              <h4>No Recalls Found</h4>
          )
      }
  }

  render() {
    return (
        <div className="search">
            <div className="search-bar">
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Search Functionality Will Be Available In The Future" aria-describedby="Eclipx" disabled/>
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button">Search</button>
                    </div>
                </div>
            </div>
            <div className="search-results">
                <h3>Recall Campaigns:</h3>
                <ul className="list-group">
                    {this.generateRecalls()}
                </ul>
            </div>
        </div>       
    );
  }
}

export default recallCampaigns;