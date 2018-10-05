import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Persistor from '../../util/persistor';
import RecallSlim from './vehicleSlim';

import './vehicles.css';

class Vehicles extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search: '',
            recalls: [],
            orderSort: '',
            activeFilter: true
        };

        this.getRecalls = this.getVehicles.bind(this);
        this.filterResults = this.filterResults.bind(this);
        this.resetRecalls = this.resetRecalls.bind(this);
    }

    componentDidMount(){
        let recalls = Persistor.getRecalls();
        this.setState({recalls: recalls.data});
        //Persistor.checkActiveRecalls();
    }

    resetRecalls(){
        let recalls = Persistor.getRecalls();
        this.setState({recalls: recalls.data});
    }

    getVehicles() {
        const {recalls} = this.state;
        if (recalls) {
            return this.state.recalls.map((e, i) => {
                return <RecallSlim key={i} id={e.id} automatic={e.automatic} vin={e.meta.vehicle.vin} manufacturer={e.meta.vehicle.manufacturer} make={e.meta.vehicle.make}
                 model={e.meta.vehicle.model} year={e.meta.vehicle.year} organization={e.meta.custodian.organization} registration={e.meta.vehicle.registration}
                 recallCount={e.meta.vehicle.recallCount} active={e.meta.vehicle.active}/>
            });
        } else {
            return <div className="alert alert-warning">No Vehicles Found</div>
        }
    }

    filterResults(){
        //let pattern = `/.*(${this.state.search.toLowerCase()}).*/`;
        let filtered = this.state.recalls.filter(e => {
            if(e.meta.vehicle.manufacturer.toLowerCase().includes(this.state.search.toLowerCase()) || e.meta.vehicle.make.toLowerCase().includes(this.state.search.toLowerCase())
                || e.meta.vehicle.year.toLowerCase().includes(this.state.search.toLowerCase()) || e.meta.custodian.name.toLowerCase().includes(this.state.search.toLowerCase())){
                return true;
            }
        });
        this.setState({recalls: filtered});
    }

    filterActive(){
        var arraySort = require('array-sort')
        let activeFilter = this.state.activeFilter;
        let filtered = this.state.recalls;

        if(activeFilter == true){
            filtered = arraySort(this.state.recalls, 'sortActive');
            this.state.activeFilter = false;
        }
        if(activeFilter == false){
            filtered = arraySort(this.state.recalls, 'sortActive', {reverse: true});
            this.state.activeFilter = true;
        }

        this.setState({recalls: filtered});
    }

    sortResults(key){
        var arraySort = require('array-sort')
        let sortWord = key;
        let filtered = this.state.recalls;

        
        if(sortWord == this.state.orderSort){
        filtered = arraySort(this.state.recalls, sortWord, {reverse: true})
        this.state.orderSort = '';
        }
        else{
          filtered = arraySort(this.state.recalls, sortWord)
          this.state.orderSort = key;
        }
  
        this.setState({recalls: filtered})
    }

    render() {
        return (
            <div className="recalls">
                <h1>Vehicles</h1>
                <p>Vehicles Board</p>
                <div className="search">
                    {                        
                        <div className="search-actions">
                            <button className="btn btn-primary" onClick={() => this.sortResults('sortManufacturer')}>Sort By Manufacturer</button>
                            <button className="btn btn-primary" onClick={() => this.sortResults('sortMake')}>Sort By Make</button>
                            <button className="btn btn-primary" onClick={() => this.sortResults('sortYear')}>Sort By Year</button>
                            <button className="btn btn-primary" onClick={() => this.filterActive()}>Active?</button>
                        </div>                       
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
                            {this.getVehicles()}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Vehicles;