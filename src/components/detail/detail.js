import React, { Component } from 'react';
import './detail.css';
import {Link} from 'react-router-dom';

import DetailTable from './table';
import Communications from './communications';
import Notes from './notes';

//Constructer to initialise our keys to store data.
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

    //This starts when the page is loaded. It clears the keys and then runs the initialise data function.
    componentDidMount(){
    //This will refresh data into the keys to enable data to be persistant. As most keys are removed beforehand this will just load the
    //list[] array with stored data.
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