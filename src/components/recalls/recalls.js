import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './fleet.css';

const axios = require('axios');
const mock = require('./mock');
const cheerio = require('cheerio');

class Recalls extends Component {
    constructor(props){
        super(props);
        this.state = {
            tryAgain: false,
            data: [
                {
                    manufacturer: '',
                    recalls: []
                }
            ]
        }
    }

    componentDidMount(){
        axios.get('http://localhost:5000/api/recalled-vehicles').then(res => {
            this.setState({
                data: [JSON.parse(res.data)]
            });
        });
    }

    render() {
        const {data} = this.state;
        let result;
        if(data[0].recalls.length){
            result = data.map((item, index) => {
                return (
                    <div className="recalled-vehicle-section" key={index}>
                        <h2 key={index}>{item.manufacturer}</h2>
                        <ul className="list-group">
                        {item.recalls.map((item, index) => {
                            return (
                                <li className="list-group-item" key={index}>
                                    <div className="row">
                                        <div className="col-3">
                                            View Recall:<br/>
                                            <Link to={"/recall/" + item.id} params={{ id: item.id }}><span className="badge badge-primary">View</span></Link>
                                        </div>
                                        <div className="col-3">
                                            Model: <br/>
                                            <span className="badge badge-dark">{item.model}</span>
                                        </div>
                                        <div className="col-3">
                                            Year: <br/>
                                            <span className="badge badge-dark">{item.year}</span>
                                        </div>
                                        <div className="col-3">
                                            Recalled On:<br/>
                                            <span className="badge badge-warning">{new Date(item.recalled_on).toDateString()}</span>
                                        </div>
                                    </div>
                                </li>
                            )
                        })}
                        </ul>
                    </div>
                )
            });
        } else {
            let tryAgain = '';
            if(this.state.tryAgain){
                tryAgain = <div className="alert alert-warning">Failed To Initiate Automatic Recall Finder</div> 
            }
            result = <div className="jumbotron">
            {tryAgain}
            <p>Automatic Recall Finder Did Not Find Any Recalls</p><br/>
            <button className="btn btn-outline-dark" to="/addrecall" onClick={(e) => {this.setState({tryAgain:true})}}>Try Again</button>
            </div>
        }
        
        let recalls = localStorage.getItem('list');
        let recallCountString;
        if(recalls){
            recalls = JSON.parse(recalls);
            recallCountString = `Currently ${recalls.length} Recalls`;
        } else {
            recallCountString = `Currently No Recalls`;
        }

        return (
            <div className="app-fleet">
                <div className="recalled-vehicles">
                    <h1>Recalls</h1>
                    {recallCountString}<br/><br/>
                    <Link className="route-linker btn btn-outline-dark" to="/addrecall">Manually Add Recall</Link>
                    {result}
                    <div className="seperator"></div>
                    
                </div>
            </div>
        );
    }
}

export default Recalls;