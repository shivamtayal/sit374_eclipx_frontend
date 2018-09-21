import React, { Component } from 'react';
import './addRecall.css';
import {Link} from 'react-router-dom';

//Constructer to initialise our keys to store data.
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
      manuErr:"",
      modelErr:"",     
      yearErr:"",     
      vinErr:"",    
      regErr:"",  
      vehErr:"",    
      descErr:"",    
      nameErr:"",   
      contactErr:"", 
      emailErr:"",
      orgErr:"",
      orgContactErr:"",
      orgEmailErr:"",
      orgNmuberErr:"",
      list: []
    };
  }

  //This starts when the page is loaded. It clears the keys and then runs the initialise data function.
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
    
    //This will refresh data into the keys to enable data to be persistant. As most keys are removed beforehand this will just load the
    //list[] array with stored data.
    this.initialiseData();
  }
 
  

  //This function tracks input in the fields and stores them in our keys.
  updateInput(key, value) {
    this.setState({ [key]: value });
    localStorage.setItem(key, value);
  }

   
  //Validate the value of input
  validate () {
   

    let isError = false;
    const errors = {
      manuErr:"",
      modelErr:"",     
      yearErr:"",     
      vinErr:"",    
      regErr:"",  
      vehErr:"",    
      descErr:"",    
      nameErr:"",   
      contactErr:"", 
      emailErr:"",
      orgErr:"",
      orgContactErr:"",
      orgEmailErr:"",
      orgNmuberErr:"",
    };
    if(this.state.manufacturer.length<5){
      isError = true;
      errors.manuErr = "The value cannot be null ! ";
    }  
    if(this.state.model.length<=0) {
      isError = true;
      errors.modelErr = "The value cannot be null ! ";
    }
    if(this.state.year.match(/^[0-9]/gi)) {
      isError = true;
      errors.yearErr = "The value must be integer  ! ";
    }
    if(this.state.vin.match(/^[0-9]/gi)) {
      isError = true;
      errors.vinErr = "The value cannot be null ! ";
    }
    if(this.state.registration.length<=0) {
      isError = true;
      errors.regErr = "The value cannot be null ! ";
    }
    if(this.state.vehicleId.length<=0) {
      isError = true;
      errors.vehErr = "The value cannot be null ! ";
    }
    if(this.state.description.length<=0) {
      isError = true;
      errors.descErr = "The value cannot be null ! ";
    }
    if(this.state.name.length<=0) {
      isError = true;
      errors.nameErr = "The value cannot be null ! ";
    }
    if(this.state.contactNumber.match(/^[0-9]/gi)) {
      isError = true;
      errors.contactErr = "The value must be integer ! ";
    }
    if(this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      isError = true;
      errors.emailErr = "The email is invalid ! ";
    }
    if(this.state.organisation.length<=0) {
      isError = true;
      errors.orgErr = "The value cannot be null ! ";
    }
    if(this.state.orgContact.match(/^[0-9]/gi)) {
      isError = true;
      errors.orgContactErr = "The value must be integer ! ";
    }
    if(this.state.orgEmail.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      isError = true;
      errors.orgEmailErr = "The email is invalid ! ";
    }
    if(this.state.orgNumber.match(/^[0-9]/gi)) {
      isError = true;
      errors.orgNmuberErr = "The value must be integer ! ";
    }



  
    this.setState({
      ...this.state,
      errors
    });
    isError = false;
    return isError;
  }

 
  //This function will create a constant called newRecall, it contains our keys and data which is input into our array as an element.
  //It will add the element to the array and generate a unique ID.
  addItem() {
    const err = this.validate();
    if (!err) {
    //The array element containing vehicle and customer details.
    const newRecall = {
      id: Math.floor(100000 + Math.random() * 900000),
      manufacturer: this.state.manufacturer.toUpperCase(),
      model: this.state.model.toUpperCase(),
      year: this.state.year,
      vin: this.state.vin,
      registration: this.state.registration.toUpperCase(),
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

    //This copies the current list to a new list for updating.
    const list = [...this.state.list];

    //This adds to new element to the list array.
    list.push(newRecall);

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
  } else {
    alert("There are some wrong informations");
    
  }
 
}
  
    
  

  //to delete an item from the array we use the .filter to remove the element. then update our list with the updated version.
  deleteItem(id) {
    const list = [...this.state.list];
    const updatedList = list.filter(item => item.id !== id);

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
        <React.Fragment>
        <Link className="route-linker btn btn-outline-dark" to='/recalls'>Back To Recalls</Link>
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
      <div className="form-group">
      <h4 className="addRecall-title">Custodian</h4>
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
      <button type="submit" className="btn btn-primary" onClick={() => this.addItem()}>New Recall</button>
    </form>
    </React.Fragment>
    );
  }
}

export default addRecall;