import React, {Component} from 'react';
import './editRecall.css'
import {Link} from 'react-router-dom';

class editRecall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newRecall: "",
      manufacturer: "",
      model: "",
      year: "",
      vin: "",
      editID: "",
      list: []
    };
  }

  componentDidMount(){
    this.initialiseData();
  }

  updateInput(key, value) {
    this.setState({ [key]: value });
    localStorage.setItem(key, value);
  }

  addItem(idEdit) {
    const editID = idEdit
    const list = [...this.state.list];
    const updatedList = list.filter(item => item.id !== editID);

    this.setState({ list: updatedList });

    localStorage.setItem("list", JSON.stringify(updatedList));

    const newRecall = {
      id: 1 + Math.random(),
      manufacturer: this.state.manufacturer,
      model: this.state.model,
      year: this.state.year,
      vin: this.state.vin
    };

    updatedList.push(newRecall);

    this.setState({
      list,
      newRecall: "",
      manufacturer: "",
      model: "",
      year: "",
      vin: ""
    });
    
    localStorage.setItem("list", JSON.stringify(updatedList));
    localStorage.setItem("manufacturer", "");
    localStorage.setItem("model", "");
    localStorage.setItem("year", "");
    localStorage.setItem("vin", "");
  }

  deleteRecall(id) {
    const editID = id
    const list = [...this.state.list];
    const updatedList = list.filter(item => item.id !== editID);

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
      <div className="editRecall">
          <h1 className="editRecall-title">Edit Recall</h1>
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
          <Link to="/search">
          <button
            onClick={() => this.addItem(this.state.editID)}
          >
          Edit
          </button>
          </Link>
          <br /><br />
          <Link to="/search">
          <button
            onClick={() => this.deleteRecall(this.state.editID)}
          >
          Delete
          </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default editRecall;