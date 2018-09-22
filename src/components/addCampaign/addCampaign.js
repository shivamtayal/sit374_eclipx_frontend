import React, { Component } from 'react';
import './addCampaign.css';
import {Link} from 'react-router-dom';

class addCampaign extends Component {
  constructor(props) {
    super(props);
    this.state = {
      manufacturer: "",
      newCampaign: "",
      campaignNumber: "",
      PRANumber: "",
      datePublished: "",
      priority: "",
      description: "",
      campaignList: []
    };
  }

  componentDidMount(){
    localStorage.removeItem("manufacturer")
    localStorage.removeItem("campaignNumber")
    localStorage.removeItem("PRANumber")
    localStorage.removeItem("datePublished")
    localStorage.removeItem("priority")
    localStorage.removeItem("description")
    localStorage.setItem("priority", "Medium")
    this.initialiseData();
  }

  updateInput(key, value) {
    this.setState({ [key]: value });

    localStorage.setItem(key, value);
  }

  addItem() {
    const newCampaign = {
      manufacturer: this.state.manufacturer,
      campaignNumber: this.state.campaignNumber,
      PRANumber: this.state.PRANumber,
      datePublished: this.state.datePublished,
      priority: this.state.priority,
      description: this.state.description
    };

    const campaignList = [...this.state.campaignList];

    campaignList.push(newCampaign);

    this.setState({
      campaignList,
      manufacturer: "",
      newCampaign: "",
      campaignNumber: "",
      PRANumber: "",
      datePublished: "",
      priority: "",
      description: ""
    });

    localStorage.setItem("campaignList", JSON.stringify(campaignList));
    localStorage.setItem("manufacturer", "");
    localStorage.setItem("campaignNumber", "");
    localStorage.setItem("PRANumber", "");
    localStorage.setItem("datePublished", "");
    localStorage.setItem("priority", "");
    localStorage.setItem("description", "")
  }

  deleteItem(id) {
    const campaignList = [...this.state.campaignList];
    const updatedcampaignList = campaignList.filter(item => item.id !== id);

    this.setState({ campaignList: updatedcampaignList });

    localStorage.setItem("campaignList", JSON.stringify(updatedcampaignList));
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
      <div className="form-group addCampaign">
      <h1 className="addCampaign-title">Add Recall Campaign</h1>
      <input
            className="form-control"
            id="campaignNumber"
            type="text"
            placeholder="Campaign number"
            value={this.state.campaignNumber}
            onChange={e => this.updateInput("campaignNumber", e.target.value)}
          />
      </div>
      <div className="form-group">
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
            id="PRANumber"
            type="text"
            placeholder="PRA No."
            value={this.state.PRANumber}
            onChange={e => this.updateInput("PRANumber", e.target.value)}
          />
      </div>
      <div className="form-group">
      <h6>Date</h6>
      <input
            className="form-control"
            id="datePublished"
            type="date"
            placeholder="Date Published"
            value={this.state.datePublished}
            onChange={e => this.updateInput("datePublished", e.target.value)}
          />
      </div>
      <div className="form-group">
      <h6>Recall description</h6>
        <textarea
            className="form-control"
            id="description"
            type="text"
            value={this.state.description}
            onChange={e => this.updateInput("description", e.target.value)}
          />
      </div>
      <div className="form-group">
      <h6>Priority</h6>
      <select
            className="form-control"
            id="priority"
            type="select"
            placeholder="Priority"
            value={this.state.priority}
            onChange={e => this.updateInput("priority", e.target.value)}
          >
			  <option value="High">High</option>
        <option value="Medium">Medium</option>
			  <option value="Low">Low</option>
			</select>
      </div>
      <button type="submit" className="btn btn-primary" onClick={() => this.addItem()}>Submit</button>
    </form>
    );
  }
}

export default addCampaign;