import React, {Component} from 'react';
import './editRecall.css'
import {Link} from 'react-router-dom';

//Constructer to initialise our keys to store data.
class editRecall extends Component {
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
      editID: "",
      list: []
    };
  }

  //This starts when the page is loaded. It clears the keys and then runs the initialise data function.
  componentDidMount(){
    this.initialiseData();
  }

  //This function tracks input in the fields and stores them in our keys.
  updateInput(key, value) {
    this.setState({ [key]: value });
    localStorage.setItem(key, value);
  }

  //This function will remove the recall entry from the array and then store a new entry which is the
  //edited version.
  //This function will create a constant called newRecall, it contains our keys and data to be inputted into our array as an element.
  //It will add the element to the array and generate a unique ID.
  addItem(idEdit) {
    //this section removes the entry from the array
    const editID = idEdit
    const list = [...this.state.list];
    const updatedList = list.filter(item => item.id !== editID);

    this.setState({ list: updatedList });

    localStorage.setItem("list", JSON.stringify(updatedList));

    //The array element containing vehicle and customer details.
    const newRecall = {
      id: 1 + Math.random(),
      manufacturer: this.state.manufacturer.toUpperCase(),
      model: this.state.model.toUpperCase(),
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

    //This adds to new element to the list array.
    updatedList.push(newRecall);

    //This resets the keys after data has been stored.
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
    
    //JSON file needs to be stored as a string, we can later convert it back into an array. All keys are stored for initialisaton.
    localStorage.setItem("list", JSON.stringify(updatedList));
    localStorage.setItem("manufacturer", "");
    localStorage.setItem("model", "");
    localStorage.setItem("year", "");
    localStorage.setItem("vin", "");
    localStorage.setItem("registration", "");
    localStorage.setItem("vehicleId", "");
    localStorage.setItem("description", "");
    localStorage.setItem("name", "");
    localStorage.setItem("contactNumber", "");
    localStorage.setItem("email", "");
    localStorage.setItem("organisation", "");
    localStorage.setItem("orgContact", "");
    localStorage.setItem("orgEmail", "");
    localStorage.setItem("orgNumber", "");
  }

  //to delete an item from the array we use the .filter to remove the element. then update our list with the updated version.
  deleteRecall(id) {
    const editID = id
    const list = [...this.state.list];
    const updatedList = list.filter(item => item.id !== editID);

    this.setState({ list: updatedList });

    localStorage.setItem("list", JSON.stringify(updatedList));
  } 

  //This function is called when the page is opened. it will read through the keys in this state and check local storage.
  //if it finds matching keys it will check the data and update the state from local storage.
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
      <h4 className="addRecall-title">Vehicle</h4>
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
      <h4 className="addRecall-title">Custodian</h4>
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
      <Link to="/search">
          <button className="btn btn-outline-primary"
            onClick={() => this.addItem(this.state.editID)}
          >
          Save
          </button>
      </Link>&nbsp;
      <Link to="/search">
          <button className="btn btn-outline-primary"
            onClick={() => this.deleteRecall(this.state.editID)}
          >
          Delete
          </button>
      </Link>
    </form>
    );
  }
}

export default editRecall;