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
      list: []
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

    const list = [...this.state.list];

    list.push(newCampaign);

    this.setState({
      list,
      newCampaign: "",
      campaignNumber: "",
      PRANumber: "",
      datePublished: "",
      priority: "",
      activeRecall: ""
    });

    localStorage.setItem("list", JSON.stringify(list));
    localStorage.setItem("campaignNumber", "");
    localStorage.setItem("PRANumber", "");
    localStorage.setItem("datePublished", "");
    localStorage.setItem("priority", "");
    localStorage.setItem("activeRecall", "")
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
      <div className="form-group addCampaign">
      <h1 className="addCampaign-title">Add Campaign</h1>
      <input
            className="form-control"
            id="campaignNumber"
            type="text"
            placeholder="campaignNumber"
            value={this.state.PRANumber}
            onChange={e => this.updateInput("campaignNumber", e.target.value)}
          />
      </div>
      <div className="form-group">
        <input
            className="form-control"
            id="PRANumber"
            type="text"
            placeholder="PRANumber"
            value={this.state.PRANumber}
            onChange={e => this.updateInput("PRANumber", e.target.value)}
          />
      </div>
      <div className="form-group">
      <input
            className="form-control"
            id="datePublished"
            type="date"
            placeholder="DatePublished"
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
      <div className="form-group">
      <input
            className="form-control"
            id="activeRecall"
            type="checkbox"
            checked={this.state.activeRecall}
            onChange={e => this.updateInput("activeRecall", e.target.checked)}
          />
      </div>

      <button type="submit" className="btn btn-primary" onClick={() => this.addItem()}>Submit</button>
    </form>
    );
  }
}

export default addCampaign;
