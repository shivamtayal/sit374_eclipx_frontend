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
      manufacturer: this.state.manufacturer.slice(),
      model: this.state.model.slice(),
      year: this.state.year.slice(),
      vin: this.state.vin.slice()
    };

    const list = [...this.state.list];

    list.push(newRecall);

    this.setState({
      list,
      newRecall: "",
      manufacturer: "",
      model: "",
      year: "",
      vin: ""
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
      <div className="addRecall">
          <h1 className="addRecall-title">Add Recall</h1>
        <div
          style={{
            padding: 50,
            textAlign: "left",
            maxWidth: 500,
            margin: "auto"
          }}
        >
          Vehicle details
          <br /><br />
          <input
            type="text"
            placeholder="Manufacturer"
            value={this.state.manufacturer}
            onChange={e => this.updateInput("manufacturer", e.target.value)}
          />
          <br /><br />
          <input
            type="text"
            placeholder="Model"
            value={this.state.model}
            onChange={e => this.updateInput("model", e.target.value)}
          />
          <br /><br />
          <input
            type="text"
            placeholder="Year"
            value={this.state.year}
            onChange={e => this.updateInput("year", e.target.value)}
          />
          <br /><br />
          <input
            type="text"
            placeholder="VIN"
            value={this.state.vin}
            onChange={e => this.updateInput("vin", e.target.value)}
          />
          <br /><br />
          <input
            type="text"
            placeholder="Registration"
            value={this.state.vin}
            onChange={e => this.updateInput("vin", e.target.value)}
          />
          <br /><br />
          <input
            type="text"
            placeholder="FP Vehicle ID"
            value={this.state.vin}
            onChange={e => this.updateInput("vin", e.target.value)}
          />
          <br /><br />
          <input
            type="text"
            placeholder="Description"
            value={this.state.vin}
            onChange={e => this.updateInput("vin", e.target.value)}
          />
          <br /><br />
          <input
            type="text"
            placeholder="Name"
            value={this.state.vin}
            onChange={e => this.updateInput("vin", e.target.value)}
          />
          <br /><br />
          <input
            type="text"
            placeholder="Contact Email"
            value={this.state.vin}
            onChange={e => this.updateInput("vin", e.target.value)}
          />
          <br /><br />
          <input
            type="text"
            placeholder="Email"
            value={this.state.vin}
            onChange={e => this.updateInput("vin", e.target.value)}
          />
          <br /><br />
          <input
            type="text"
            placeholder="Orginisation"
            value={this.state.vin}
            onChange={e => this.updateInput("vin", e.target.value)}
          />
          <br /><br />
          <input
            type="text"
            placeholder="Org Contact"
            value={this.state.vin}
            onChange={e => this.updateInput("vin", e.target.value)}
          />
          <br /><br />
          <input
            type="text"
            placeholder="Org Email"
            value={this.state.vin}
            onChange={e => this.updateInput("vin", e.target.value)}
          />
          <br /><br />
          <input
            type="text"
            placeholder="Org Number"
            value={this.state.vin}
            onChange={e => this.updateInput("vin", e.target.value)}
          />
          <br /><br />
          <Link to="/search">
          <button
            onClick={() => this.addItem()}
            disabled={!this.state.manufacturer.length}
          >
          Save
          </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default addRecall;