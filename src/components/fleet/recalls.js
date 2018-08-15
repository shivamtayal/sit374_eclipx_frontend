import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './fleet.css';
const axios = require('axios');

const mock = require('./mock');

class Recalls extends Component {
    constructor(props){
        super(props);
        this.state = {
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
        let result = data.map((item, index) => {
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

        return (
            <div className="app-fleet">
                <div className="recalled-vehicles">
                    <h1>Current Recalled Vehicles</h1>
                    {result}
                </div>
            </div>
        );
    }
}

export default Recalls;