import React, { Component } from 'react';

class recallTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newCampaign: "",
            campaignNumber: "",
            PRANumber: "",
            datePublished: "",
            priority: "",
            description: "",
            campaignList: [],
            campaignKey: "",
            relatedRecall: "",
            vin: "",
            list: [],
            rectified: "",
            rectifyDate: "",

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
            editID: ""
        };
    }

    componentDidMount(){
        this.initialiseData();
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

      updateInput(key, value) {
        this.setState({ [key]: value });
    
        localStorage.setItem(key, value);
      }

      checkRecalls(key){
          this.state.relatedRecall = false;
          this.state.campaignKey = key;

            if(this.state.campaignKey == this.state.vin){
                this.state.relatedRecall = true;
            }

      }

      addItem(idEdit) {
        //this section removes the entry from the array
        const editID = idEdit
        const list = [...this.state.list];
        const updatedList = list.filter(item => item.id !== editID);
    
        this.setState({ list: updatedList });
    
        localStorage.setItem("list", JSON.stringify(updatedList));
    
        //The array element containing vehicle and customer details.
        const newRecall = {
          id: this.state.editID,
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
          orgNumber: this.state.orgNumber,
          rectified: this.state.rectified,
          rectifyDate: this.state.rectifyDate
        };
    
        //This adds to new element to the list array.
        updatedList.push(newRecall);
    
        //This resets the keys after data has been stored.
        this.setState({list});
        
        //JSON file needs to be stored as a string, we can later convert it back into an array. All keys are stored for initialisaton.
        localStorage.setItem("list", JSON.stringify(updatedList));

      }

      generateRecalls(){
        if(this.state.campaignList.length >= 1){
          return this.state.campaignList.map(item => {
              this.checkRecalls(item.vin)
            if(this.state.relatedRecall == true){
              return (                       
              <li className="list-group-item" key={item.campaignNumber}>
                  <div className="row">
                      <div className="col-2 result-group">
                      <span className="badge badge-secondary">Save / Cancel</span><br/>
                      <button onClick={() => this.addItem(this.state.editID)}>Save</button>
                      </div>
                      <div className="col-2 result-group">
                      <span className="badge badge-secondary">Recall Priority</span><br/>
                      <span className="badge badge-light">{item.priority}</span>
                      </div>
                      <div className="col-2 result-group">
                      <span className="badge badge-secondary">PRA No.</span><br/>
                      <span className="badge badge-light">{item.PRANumber}</span>
                      </div>
                      <div className="col-2 result-group">
                      <span className="badge badge-secondary">Description</span><br/>
                      <span className="badge badge-light">{item.description}</span>
                      </div>
                      <div className="col-2 result-group">
                      <span className="badge badge-secondary">Rectified?</span><br/>
                      <span className="badge badge-light">{this.state.rectified}</span>
                      <select
                      className="form-control"
                      id="rectified"
                      type="select"
                      placeholder="Rectified?"
                      value={this.state.rectified}
                      onChange={e => this.updateInput("rectified", e.target.value)}
                      >
			          <option value="Yes">Yes</option>
                      <option value="No">No</option>
			          </select>
                      </div>
                      <div className="col-2 result-group">
                      <span className="badge badge-secondary">Rectification date</span><br/>
                      <span className="badge badge-light">{this.state.rectifyDate}</span>
                      <input
                      className="form-control"
                      id="rectifyDate"
                      type="date"
                      placeholder="Rectified Date"
                      value={this.state.rectifyDate}
                      onChange={e => this.updateInput("rectifyDate", e.target.value)}
                      />
                      </div>
                  </div>
              </li>
                  );}
              })
        } else {
            return (
                <h4>No Current Recalls</h4>
            )
        }
    }

    render(){
        return(
            <div className="search-results">
                <ul className="list-group">
                    {this.generateRecalls()}
                </ul>
            </div>
        );
    }

}

export default recallTable;








/*export default function recallTable(props) {
    props = props.state;  
    return (

            <div className="search-results">
                <ul className="list-group">
                <div className="col-2 result-group">
                    <span className="badge badge-secondary">Campaign number</span><br/>
                    <span className="badge badge-light">{}</span>
                    </div>
                </ul>
            </div>      
    );
}*/

