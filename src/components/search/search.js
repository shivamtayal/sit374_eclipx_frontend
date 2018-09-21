import React, { Component } from 'react';
import './search.css';
import {Link} from 'react-router-dom';

//Constructer to initialise our keys to store data.
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newRecall: "",
            manufacturer: "",
            model: "",
            year: "",
            vin: "",
            registration: "",
            vehicleId: "",
            description: "",
            name: "",
            contactNumber: "",
            email: "",
            organisation: "",
            orgContact: "",
            orgEmail: "",
            orgNumber: "",
            editID: "",
            list: [],
            sortList: [],
            oldKeyWord: ""
        };
    }

  //This starts when the page is loaded. It clears the keys and then runs the initialise data function.  
  componentDidMount(){
    localStorage.removeItem("manufacturer")
    localStorage.removeItem("model")
    localStorage.removeItem("year")
    localStorage.removeItem("vin")
    localStorage.removeItem("registration")
    localStorage.removeItem("vehicleId")
    localStorage.removeItem("description")
    localStorage.removeItem("name")
    localStorage.removeItem("contactNumber")
    localStorage.removeItem("email")
    localStorage.removeItem("organisation")
    localStorage.removeItem("orgContact")
    localStorage.removeItem("orgEmail")
    localStorage.removeItem("orgNumber")
    localStorage.removeItem("editID")
    //this.sortbyAlphabet();
    this.initialiseData();
    //this.sortbyAlphabet();
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

  //This function takes all the keys used in our array and sets them into the current keys.
  //this way the data is passed onto the next page and can autofill the fields for editing.
  editRecall(id,manuf,mod,yr,vin,reg,vid,des,nm,cnum,em,org,orgc,orge,orgn) {
    const editID = id;
    const manufacturer = manuf;
    const model = mod;
    const year = yr;
    const vinNumber = vin;
    const rego = reg;
    const vehid = vid;
    const desc = des;
    const nme = nm;
    const connum = cnum;
    const ema = em;
    const organ = org;
    const orgcon = orgc;
    const orgem = orge;
    const orgnum = orgn
    localStorage.setItem("editID", editID);
    localStorage.setItem("manufacturer", manufacturer);
    localStorage.setItem("model", model);
    localStorage.setItem("year", year);
    localStorage.setItem("vin", vinNumber);
    localStorage.setItem("registration", rego)
    localStorage.setItem("vehicleId", vehid)
    localStorage.setItem("description", desc)
    localStorage.setItem("name", nme)
    localStorage.setItem("contactNumber", connum)
    localStorage.setItem("email", ema)
    localStorage.setItem("organisation", organ)
    localStorage.setItem("orgContact", orgcon)
    localStorage.setItem("orgEmail", orgem)
    localStorage.setItem("orgNumber", orgnum)
  }

  //This function will create a new array that sorts the list of recalls alphabetically
  //by manufacturer.
  sortbyAlphabet(key) {
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
      if(this.state.list.length >= 1){
          //call the sorting method if there are recalls.
          //this.sortbyAlphabet();
        return this.state.list.map(item => {
            return (                       
            <li className="list-group-item" key={item.id}>
                <div className="row">
                    <div className="col-2 result-group">
                    <span className="badge badge-secondary">Identifier</span><br/>
                    <span className="badge badge-light">{item.id}</span>
                    </div>
                    <div className="col-2 result-group">
                    <span className="badge badge-secondary">Manufacturer</span><br/>
                    <span className="badge badge-light">{item.manufacturer}</span>
                    </div>
                    <div className="col-2 result-group">
                    <span className="badge badge-secondary">Model</span><br/>
                    <span className="badge badge-light">{item.model}</span>
                    </div>
                    <div className="col-2 result-group">
                    <span className="badge badge-secondary">Year of Model</span><br/>
                    <span className="badge badge-light">{item.year}</span>
                    </div>
                    <div className="col-2 result-group">
                    <span className="badge badge-secondary">Registration</span><br/>
                    <span className="badge badge-light">{item.registration}</span>
                    </div>
                    <div className="col-2 result-group">
                    <span className="badge badge-secondary">VIN</span><br/>
                    <Link to='/detail' className="nav-link btn btn-outline-primary" onClick={() => this.editRecall(item.id, item.manufacturer,item.model,item.year,item.vin,item.registration,item.vehicleId,item.description,item.name,item.contactNumber,item.email,item.organisation,item.orgContact,item.orgEmail,item.orgNumber)}>{item.vin}</Link>
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
                <h3>Vehicles:</h3>
                <button className="btn btn-primary" type="button" onClick={() => this.sortbyAlphabet('manufacturer')}>Sort by Manufacturer</button>
                <button className="btn btn-primary" type="button" onClick={() => this.sortbyAlphabet('model')}>Sort by Model</button>
                <button className="btn btn-primary" type="button" onClick={() => this.sortbyAlphabet('year')}>Sort by Year</button>
                <button className="btn btn-primary" type="button" onClick={() => this.sortbyAlphabet('registration')}>Sort by Registration</button>
                <button className="btn btn-primary" type="button" onClick={() => this.sortbyAlphabet('id')}>Sort by ID</button>
                <button className="btn btn-primary" type="button" onClick={() => this.sortbyAlphabet('id')}>Vehicles</button>
                <button className="btn btn-primary" type="button" onClick={() => this.sortbyAlphabet('id')}>Recalls</button>
                <button className="btn btn-primary" type="button" onClick={() => this.sortbyAlphabet('id')}>Fleet</button>
                <ul className="list-group">
                    {this.generateRecalls()}
                </ul>
            </div>
        </div>       
    );
  }
}

export default Search;