import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './fleet.css';

const axios = require('axios');
const mock = require('./mock');
const cheerio = require('cheerio');

class RecallManager extends Component {

    constructor(props){
        super(props);
        this.state = {
            findingRecalls: false,
            foundRecalls: null,
            data: [
                {
                    manufacturer: '',
                    recalls: []
                }
            ]
        }

        this.automaticRecalls = {
            data: []
        }

        this.getRecallsAutomatically = this.getRecallsAutomatically.bind(this);
        this.generateAutomaticRecallBanner = this.generateAutomaticRecallBanner.bind(this);
    }

    componentDidMount(){
        axios.get('http://localhost:5000/api/recalled-vehicles').then(res => {
            this.setState({
                data: [JSON.parse(res.data)]
            });
        });
    }

    getRecallsAutomatically(){
        this.automaticRecalls.data = [];
        this.setState({findingRecalls: true});
        axios.get('https://www.productsafety.gov.au/recalls/compulsory-takata-airbag-recall/takata-airbag-recalls-list').then(res => {
            let $ = cheerio.load(res.data);
            
            $('.table-takata-recalls tbody tr').each((i, e) => {
                let newItem = {
                    manufacturer: '',
                    recalls: []
                }
                let recallItem = {
                    make: '',
                    year: '',
                    pra: ''
                }

                if($(e).hasClass('table-header') && $(e).text()){
                    newItem.manufacturer = $(e).text().trim();
                    this.automaticRecalls.data.push(newItem);
                    $(e).nextUntil('.table-header').each((i, e) => {
                        if(e.type == 'tag'){
                            $(e.children).each((i, e) => {
                                if(e.type == 'tag'){
                                    if (i == 1){
                                        recallItem.make = $(e).text().trim();
                                    } else if (i == 3) {
                                        recallItem.year = $(e).text().trim();
                                    } else if (i == 5){
                                        recallItem.pra = $(e).text().trim();
                                        newItem.recalls.push(recallItem);
                                    }
                                }
                            })
                        }
                    })
                }
            })
            this.setState({findingRecalls: false, foundRecalls: true});
            localStorage.setItem('automatic_recalls', JSON.stringify(this.automaticRecalls));
        }).catch(err => {
            this.setState({foundRecalls: false});
        })
    }

    generateAutomaticRecallBanner(){
        if(this.state.foundRecalls == true){
            return <div className="alert alert-succes">Found {this.automaticRecalls.data.length} recalls</div>
        } else if (this.state.foundRecalls == false){
            return <div className="alert alert-danger">An Error Occurred</div>
        }
    }

    generateRecallInformation(){
        let recalls = localStorage.getItem('list');
        recalls = JSON.parse(recalls);
        let automaticRecalls = localStorage.getItem('automatic_recalls');
        automaticRecalls = JSON.parse(automaticRecalls);
        let recallCount = 0;

        if(recalls){
            recallCount = recalls.length;
        }

        if(automaticRecalls.data){
            recallCount = recallCount + automaticRecalls.data.length;
        }

        return recallCount;
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
        }       
        

        let recallCountString = `Found ${this.generateRecallInformation()} recalls`;

        return (
            <div className="app-fleet">
                <div className="recalled-vehicles">
                    <h1>Recalls</h1>
                    <h3>{recallCountString}</h3>
                    <br/>
                    <div className="row jumbotron">
                        <div className="col-6">
                            <div className="automatic-recall-group">
                                <h4>Automatic Recall Finder</h4><br/>
                                {this.state.findingRecalls ? <div className="alert alert-primary">Loading...</div> : <button className="btn btn-outline-dark" onClick={this.getRecallsAutomatically}>Get Recalls</button>}
                                {this.generateAutomaticRecallBanner()}
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="manual-recall-group">
                                <h4>Manually Add Recall</h4><br/>
                                <Link className="route-linker btn btn-outline-dark" to="/add-recall">Add Recall</Link>
                                <br/>
                                <Link className="route-linker btn btn-outline-dark" to="/add-campaign">Add campaign</Link>                    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RecallManager;