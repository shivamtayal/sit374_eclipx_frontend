import React, { Component } from 'react';
import './detail.css';
import {Link} from 'react-router-dom';

import DetailTable from './detail-table';
import RecallTable from './recall-table';
import Communications from './communications';
import Notes from './notes';

//Constructer to initialise our keys to store data.
class View extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recall: true,
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
            campaignList: [],

            alphabetList: [],
            oldTh: ""
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
        if(this.state.recall){
            return <RecallTable sortBy={(e) => this.sortBy(e)}/>
        } else if (this.state.communications){
            return <Communications sortBy={(e) => this.sortBy(e)}/>
        } else if (this.state.notes){
            return <Notes/>
        }
    }

    sortBy = (e) => {
        //change table nodes to list for sorting 
        var th = e.target;
        var thArr = document.getElementById("thead").getElementsByTagName("th");
        var trArr = document.getElementById("tbody").getElementsByTagName("tr");

        var thList = [];
        for (var i = 0; i < thArr.length; i++)
            thList.push(thArr[i].innerHTML);

        var trList = [];
        for (var i = 0; i < trArr.length; i++) {
            var tdArr = trArr[i].getElementsByTagName("td");
            var tdList = [];
            for (var j = 0; j < tdArr.length; j++) {
                tdList[thList[j]] = tdArr[j].innerHTML;
            }
            trList.push(tdList);            
        }

        //sorting
        var arraySort = require('array-sort')
        for (var i = 0; i < thList.length; i++) {
            if (thList[i].indexOf(th.name) != -1) {
                if (th.name == this.state.oldTh) {
                    trList = arraySort(trList, thList[i]);
                    this.state.oldTh = "";
                }
                else {
                    trList = arraySort(trList, thList[i], {reverse: true});
                    this.state.oldTh = th.name;
                }
                break;
            }
        }

        //display list in table
        var tableContent = "";
        for (var i = 0; i < trList.length; i++) {
            tableContent += "<tr>";
            for (var j = 0; j < thList.length; j++) {
                tableContent += "<td>" + trList[i][thList[j]] + "</td>";
            }
            tableContent += "</tr>"
        } 
        document.getElementById("tbody").innerHTML = tableContent;
    }


    render() {
        return (
            <div className="detail">
                <div className="detail-header">
                    <DetailTable state={this.state}/>
                </div>
                <div className="card text-center detail-piece">
                    <div className="card-header">
                        <ul className="nav nav-tabs card-header-tabs">
                        <li className="nav-item">
                            <a href="#recall" className={"nav-link " + this.checkIsActive('recall')} onClick={(e) => {this.setState({recall: true, communications: false, notes: false})}}>Recalls</a>
                        </li>
                        <li className="nav-item">
                            <a href="#comms" className={"nav-link " + this.checkIsActive('communications')} onClick={(e) => {this.setState({communications: true, recall: false, notes: false})}}>Communications</a>
                        </li>
                        <li className="nav-item">
                            <a href="#notes" className={"nav-link " + this.checkIsActive('notes')} onClick={(e) => {this.setState({notes: true, recall: false, communications: false})}}>Notes</a>
                        </li>
                        </ul>
                    </div>
                    <div className="card-body">
                        {this.tileToRender()}
                    </div>
                </div>
            </div>
        )
    }
}

export default View;