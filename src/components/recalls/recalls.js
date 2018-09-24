import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Persistor from '../../util/persistor';
import RecallSlim from '../recalls/recallSlim';

import './recalls.css';

class Recalls extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search: '',
            recalls: []
        };

        this.getRecalls = this.getRecalls.bind(this);
        this.filterResults = this.filterResults.bind(this);
        this.resetRecalls = this.resetRecalls.bind(this);
    }

    componentDidMount(){
        let recalls = Persistor.getRecalls();
        this.setState({recalls: recalls.data});
    }

    resetRecalls(){
        let recalls = Persistor.getRecalls();
        this.setState({recalls: recalls.data});
    }

    getRecalls() {
        const {recalls} = this.state;
        if (recalls) {
            return this.state.recalls.map((e, i) => {
                return <RecallSlim key={i} id={e.id} automatic={e.automatic} vin={e.meta.vehicle.vin} manufacturer={e.meta.vehicle.manufacturer} make={e.meta.vehicle.make} model={e.meta.vehicle.model} year={e.meta.vehicle.year} organization={e.meta.custodian.organization}/>
            });
        } else {
            return <div className="alert alert-warning">No Recalls Found</div>
        }
    }

    filterResults(){
        //let pattern = `/.*(${this.state.search.toLowerCase()}).*/`;
        let filtered = this.state.recalls.filter(e => {
            if(e.meta.vehicle.manufacturer.toLowerCase().includes(this.state.search.toLowerCase()) || e.meta.vehicle.make.toLowerCase().includes(this.state.search.toLowerCase())){
                return true;
            }
        });
        this.setState({recalls: filtered});
    }

    render() {
        return (
            <div className="recalls">
                <h1>Recalls</h1>
                <p>Recall Board</p>
                <div className="search">
                    {
                        /*
                        <div className="search-actions">
                            <button className="btn btn-primary">Sort By Manufacturer</button>
                            <button className="btn btn-primary">Sort By Make</button>
                            <button className="btn btn-primary">Sort By Model</button>
                            <button className="btn btn-primary">Sort By Year</button>
                        </div>
                        */
                    }
                    <div className="search-results">
                        <div className="search-bar">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control"
                                       placeholder="Search"
                                       aria-describedby="Eclipx" onChange={e => {this.setState({search: e.target.value}); this.resetRecalls()}}/>
                                <div className="input-group-append">
                                    <button className="btn btn-dark" type="button" onClick={this.filterResults}>Search</button>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <ul className="list-group">
                            {this.getRecalls()}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Recalls;