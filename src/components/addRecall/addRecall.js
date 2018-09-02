import React, { Component } from 'react';
import './addRecall.css';
import {Link} from 'react-router-dom';

class addRecall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newRecall: "",
      manufacturer: "",
      model: "",
      year: "",
      vin: "",
      list: []
    };
  }

  componentDidMount(){
    localStorage.removeItem("manufacturer")
    localStorage.removeItem("model")
    localStorage.removeItem("year")
    localStorage.removeItem("vin")
    this.initialiseData();
  }

  updateInput(key, value) {
    this.setState({ [key]: value });

    localStorage.setItem(key, value);
  }

  addItem() {
    const newRecall = {
      id: 1 + Math.random(),
      manufacturer: this.state.manufacturer,
      model: this.state.model,
      year: this.state.year,
      vin: this.state.vin,
      registration: this.state.registration
    };

    const list = [...this.state.list];

    list.push(newRecall);

    this.setState({
      list,
      newRecall: "",
      manufacturer: "",
      model: "",
      year: "",
      vin: "",
    });
    
    localStorage.setItem("list", JSON.stringify(list));
    localStorage.setItem("manufacturer", "");
    localStorage.setItem("model", "");
    localStorage.setItem("year", "");
    localStorage.setItem("vin", "");
  }

  deleteItem(id) {
    const list = [...this.state.list];
    const updatedList = list.filter(item => item.id !== id);

    this.setState({ list: updatedList });

    localStorage.setItem("list", JSON.stringify(updatedList));
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

  render() {
    return (
      <form className="w-50 m-auto">
      <div className="form-group addRecall">
      <h1 className="addRecall-title">Add Recall</h1>
      <input
            className="form-control"
            id="manufacturer"
            type="text"
            placeholder="Manufacturer"
            value={this.state.manufacturer}
            onChange={e => this.updateInput("manufacturer", e.target.value)}
          />
      </div>
      <div className="form-group">
        <input
            className="form-control"
            id="model"
            type="text"
            placeholder="Model"
            value={this.state.model}
            onChange={e => this.updateInput("model", e.target.value)}
          />
      </div>
      <div className="form-group">
      <input
            className="form-control"
            id="year"
            type="text"
            placeholder="Year"
            value={this.state.year}
            onChange={e => this.updateInput("year", e.target.value)}
          />
      </div>
      <div className="form-group">
      <input
            className="form-control"  
            id="vin"
            type="text"
            placeholder="VIN"
            value={this.state.vin}
            onChange={e => this.updateInput("vin", e.target.value)}
          />
      </div>
      <div className="form-group">
      <input
            className="form-control"  
            id="registration"
            type="text"
            placeholder="Registration"
            value={this.state.registration}
            onChange={e => this.updateInput("registration", e.target.value)}
          />
      </div>
      <div className="form-group">
      <input
            className="form-control"  
            id="vehicleId"
            type="text"
            placeholder="FP Vehicle ID"
            value={this.state.vehicleId}
            onChange={e => this.updateInput("vehicleId", e.target.value)}
          />
      </div>
      <div className="form-group">
      <input
            className="form-control"  
            id="vin"
            type="text"
            placeholder="VIN"
            value={this.state.vin}
            onChange={e => this.updateInput("vin", e.target.value)}
          />
      </div>s
      <button type="submit" className="btn btn-primary" onClick={() => this.addItem}>Submit</button>
    </form>
    );
  }
}

export default addRecall;