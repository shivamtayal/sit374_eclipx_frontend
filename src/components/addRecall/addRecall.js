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
      list: []
    };
  }

  componentDidMount(){
    localStorage.removeItem("manufacturer")
    localStorage.removeItem("model")
    localStorage.removeItem("year")
    localStorage.removeItem("vin")
    localStorage.removeItem("registration")
    localStorage.removeItem("vehicleId")
    localStorage.removeItem("description")
    localStorage.removeItem("name")
    localStorage.removeItem("contactNumber")
    localStorage.removeItem("email")
    localStorage.removeItem("organisation")
    localStorage.removeItem("orgContact")
    localStorage.removeItem("orgEmail")
    localStorage.removeItem("orgNumber")
    localStorage.removeItem("editID")
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
      registration: this.state.registration,
      vehicleId: this.state.vehicleId,
      description: this.state.description,
      name: this.state.name,
      contactNumber: this.state.contactNumber,
      email: this.state.email,
      organisation: this.state.organisation,
      orgContact: this.state.orgContact,
      orgEmail: this.state.orgEmail,
      orgNumber: this.state.orgNumber
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
      registration: "",
      vehicleId: "",
      description: "",
      name: "",
      contactNumber: "",
      email: "",
      organisation: "",
      orgContact: "",
      orgEmail: "",
      orgNumber: ""
    });
    
    localStorage.setItem("list", JSON.stringify(list));
    localStorage.setItem("manufacturer", "");
    localStorage.setItem("model", "");
    localStorage.setItem("year", "");
    localStorage.setItem("vin", "");
    localStorage.setItem("registration", "")
    localStorage.setItem("vehicleId", "")
    localStorage.setItem("description", "")
    localStorage.setItem("name", "")
    localStorage.setItem("contactNumber", "")
    localStorage.setItem("email", "")
    localStorage.setItem("organisation", "")
    localStorage.setItem("orgContact", "")
    localStorage.setItem("orgEmail", "")
    localStorage.setItem("orgNumber", "")
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
            id="description"
            type="text"
            placeholder="Description"
            value={this.state.description}
            onChange={e => this.updateInput("description", e.target.value)}
          />
      </div>
      <div className="form-group">
      <input
            className="form-control"  
            id="name"
            type="text"
            placeholder="Name"
            value={this.state.name}
            onChange={e => this.updateInput("name", e.target.value)}
          />
      </div>
      <div className="form-group">
      <input
            className="form-control"  
            id="contactNumber"
            type="text"
            placeholder="Contact Number"
            value={this.state.contactNumber}
            onChange={e => this.updateInput("contactNumber", e.target.value)}
          />
      </div>
      <div className="form-group">
      <input
            className="form-control"  
            id="email"
            type="text"
            placeholder="Email"
            value={this.state.email}
            onChange={e => this.updateInput("email", e.target.value)}
          />
      </div>
      <div className="form-group">
      <input
            className="form-control"  
            id="organisation"
            type="text"
            placeholder="Organisation"
            value={this.state.organisation}
            onChange={e => this.updateInput("organisation", e.target.value)}
          />
      </div>
      <div className="form-group">
      <input
            className="form-control"  
            id="orgContact"
            type="text"
            placeholder="Organisation Conact"
            value={this.state.orgContact}
            onChange={e => this.updateInput("orgContact", e.target.value)}
          />
      </div>
      <div className="form-group">
      <input
            className="form-control"  
            id="orgEmail"
            type="text"
            placeholder="Organisation Email"
            value={this.state.orgEmail}
            onChange={e => this.updateInput("orgEmail", e.target.value)}
          />
      </div>
      <div className="form-group">
      <input
            className="form-control"  
            id="orgNumber"
            type="text"
            placeholder="Organisation Number"
            value={this.state.orgNumber}
            onChange={e => this.updateInput("orgNumber", e.target.value)}
          />
      </div>
      <button type="submit" className="btn btn-primary" onClick={() => this.addItem()}>Submit</button>
    </form>
    );
  }
}

export default addRecall;