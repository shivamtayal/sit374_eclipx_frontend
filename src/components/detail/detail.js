import React, { Component } from 'react';
import './detail.css';
import {Link} from 'react-router-dom';

import DetailTable from './table';
import Communications from './communications';
import Notes from './notes';

class View extends Component {
    constructor(props) {
        super(props);
        this.state = {
            table: true,
            communications: false,
            notes: false,
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

    updateInput(key, value) {
        this.setState({ [key]: value });
        localStorage.setItem(key, value);
    }
    
    addItem(idEdit) {
        const editID = idEdit
        const list = [...this.state.list];
        const updatedList = list.filter(item => item.id !== editID);
    
        this.setState({ list: updatedList });
    
        localStorage.setItem("list", JSON.stringify(updatedList));
    
        const newRecall = {
          id: 1 + Math.random(),
          manufacturer: this.state.manufacturer,
          model: this.state.model,
          year: this.state.year,
          vin: this.state.vin
        };
    
        updatedList.push(newRecall);
    
        this.setState({
          list,
          newRecall: "",
          manufacturer: "",
          model: "",
          year: "",
          vin: ""
        });
        
        localStorage.setItem("list", JSON.stringify(updatedList));
        localStorage.setItem("manufacturer", "");
        localStorage.setItem("model", "");
        localStorage.setItem("year", "");
        localStorage.setItem("vin", "");
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

    checkIsActive(type){
        if(this.state[type]){
            return 'active';
        } else {
            return '';
        }
    }

    tileToRender(){
        if(this.state.table){
            return <DetailTable state={this.state}/>
        } else if (this.state.communications){
            return <Communications/>
        } else if (this.state.notes){
            return <Notes/>
        }
    }


    render() {
        return (
            <div className="card text-center detail-piece">
            <div className="card-header">
                <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-item">
                    <a href="#table" className={"nav-link " + this.checkIsActive('table')} onClick={(e) => {this.setState({table: true, communications: false, notes: false})}}>Recall Table</a>
                </li>
                <li className="nav-item">
                    <a href="#comms" className={"nav-link " + this.checkIsActive('communications')} onClick={(e) => {this.setState({communications: true, table: false, notes: false})}}>Communications</a>
                </li>
                <li className="nav-item">
                    <a href="#notes" className={"nav-link " + this.checkIsActive('notes')} onClick={(e) => {this.setState({notes: true, table: false, communications: false})}}>Notes</a>
                </li>
                </ul>
            </div>
            <div className="card-body">
                {this.tileToRender()}
            </div>
            </div>
        )
    }
}

export default View;