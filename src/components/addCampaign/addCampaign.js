import React, { Component } from 'react';
import './addCampaign.css';
import {Link} from 'react-router-dom';

class addCampaign extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newCampaign: "",
      campaignNumber: "",
      PRANumber: "",
      datePublished: "",
      priority: "",
      activeRecall: "",
      campaignList: []
    };
  }

  componentDidMount(){
    localStorage.removeItem("campaignNumber")
    localStorage.removeItem("PRANumber")
    localStorage.removeItem("datePublished")
    localStorage.removeItem("priority")
    localStorage.removeItem("activeRecall")
    this.initialiseData();
  }

  updateInput(key, value) {
    this.setState({ [key]: value });

    localStorage.setItem(key, value);
  }

  addItem() {
    const newCampaign = {
      id: 1 + Math.random(),
      campaignNumber: this.state.campaignNumber,
      PRANumber: this.state.PRANumber,
      datePublished: this.state.datePublished,
      priority: this.state.priority,
      activeRecall: this.state.activeRecall
    };

    const campaignList = [...this.state.campaignList];

    campaignList.push(newCampaign);

    this.setState({
      campaignList,
      newCampaign: "",
      campaignNumber: "",
      PRANumber: "",
      datePublished: "",
      priority: "",
      activeRecall: ""
    });

    localStorage.setItem("campaignList", JSON.stringify(campaignList));
    localStorage.setItem("campaignNumber", "");
    localStorage.setItem("PRANumber", "");
    localStorage.setItem("datePublished", "");
    localStorage.setItem("priority", "");
    localStorage.setItem("activeRecall", "")
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
      <h1 className="addCampaign-title">Add Campaign</h1>
      <input
            className="form-control"
            id="campaignNumber"
            type="text"
            placeholder="Campaign Number"
            value={this.state.campaignNumber}
            onChange={e => this.updateInput("campaignNumber", e.target.value)}
          />
      </div>
      <div className="form-group">
        <input
            className="form-control"
            id="PRANumber"
            type="text"
            placeholder="PRA Number"
            value={this.state.PRANumber}
            onChange={e => this.updateInput("PRANumber", e.target.value)}
          />
      </div>
      <div className="form-group">
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
      <select
            className="form-control"
            id="priority"
            type="selet"
            value={this.state.priority}
            onChange={e => this.updateInput("priority", e.target.value)}
          >
			  <option value="high">High</option>
			  <option value="low">Low</option>
			  <option value="medium">Medium</option>
			</select>
      </div>
     
      <button type="submit" className="btn btn-primary" onClick={() => this.addItem()}>Submit</button>
    </form>
    );
  }
}

export default addCampaign;
