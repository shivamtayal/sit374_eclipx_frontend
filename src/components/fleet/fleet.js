import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './fleet.css';
const axios = require('axios');

class Fleet extends Component {

    getActiveRecalls() {

        //axios.get('http://localhost:51078/api/recalled-vehicles/new').then(res => {
        //    console.log(res);
        //});
        let data = [
            {
                manufacturer: 'Honda',
                recalls: [
                    {
                        id: '1',
                        year: '2010',
                        model: 'City',
                        recalled_on: '15/07/2018'
                    },
                    {
                        id: '2',
                        year: '2002',
                        model: 'City',

                        recalled_on: '15/07/2018'
                    },
                    {
                        id: '3',
                        year: '2009',
                        model: 'CR-V',
                        recalled_on: '15/07/2018'
                    },
                    {
                        id: '4',
                        year: '1998',
                        model: 'Accord',
                        recalled_on: '15/07/2018'
                    },
                    {
                        id: '5',
                        year: '1999',
                        model: 'Accord',
                        recalled_on: '15/07/2018'
                    }
                ]
            },
            {
                manufacturer: 'BMW',
                recalls: [
                    {
                        id: '6',
                        year: '2018',
                        model: 'i8',
                        recalled_on: '15/07/2018'
                    },
                    {
                        id: '7',
                        year: '2003',
                        model: '118i',
                        recalled_on: '15/07/2018'
                    }
                ]
            },
            {
                manufacturer: 'Toyota',
                recalls: [
                    {
                        id: '8',
                        year: '2017',
                        model: 'Corolla',
                        recalled_on: '15/07/2018'
                    },
                    {
                        id: '9',
                        year: '2000',
                        model: 'Camry',
                        recalled_on: '15/07/2018'
                    },
                    {
                        id: '10',
                        year: '2007',
                        model: 'Potato Mobile',
                        recalled_on: '15/07/2018'
                    }
                ]
            }
        ];

        return data;
    }

    render() {
        let data = this.getActiveRecalls();
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
                                        <span className="badge badge-warning">{item.recalled_on}</span>
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

export default Fleet;