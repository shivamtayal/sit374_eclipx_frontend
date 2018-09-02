import React, { Component } from 'react';
import './search.css';
import {Link} from 'react-router-dom';


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
            alphabetList: []
        }
    }

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
    this.initialiseData();
  }

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

  sortbyAlphabet(list) {

  }

  render() {
    return (
        <div className="search">
            <div className="search-bar">
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Search Recalls" aria-p="Recall Search Input" aria-describedby="Eclipx" />
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button">Search</button>
                    </div>
                </div>
            </div>
            <div className="search-results">
                <h3>Results:</h3>
                <ul className="list-group">
                    {this.state.list.map(item => {
                    return (                       
                    <li key={item.id}>
                        <div className="row">
                            <div className="col-4 result-group">
                            <span class="badge badge-secondary">Manufacturer</span>
                            <span class="badge badge-light">{item.manufacturer}</span>
                            </div>
                            <div className="col-4 result-group">
                            <span class="badge badge-secondary">Model</span>
                            <span class="badge badge-light">{item.model}</span>
                            </div>
                            <div className="col-4 result-group">
                            <span class="badge badge-secondary">Year of Model</span>
                            <span class="badge badge-light">{item.year}</span>
                            </div>
                            <div className="col-4 result-group">
                            <span class="badge badge-secondary">VIN</span>
                            <span class="badge badge-light">{item.vin}</span>
                            <Link to='/editRecall' className="nav-link" onClick={() => this.editRecall(item.id, item.manufacturer,item.model,item.year,item.vin)}>{item.vin}</Link>
                            <Link to='/detail' className="nav-link" onClick={() => this.editRecall(item.id, item.manufacturer,item.model,item.year,item.vin,item.registration,item.vehicleId,item.description,item.name,item.contactNumber,item.email,item.organisation,item.orgContact,item.orgEmail,item.orgNumber)}>{item.vin}New Page</Link>
                            </div>
                        </div>
                    </li>
                        );
                    })}
                </ul>
                <button>Sort by alphabet</button>
            </div>
        </div>       
    );
  }
}

export default Search;