import React, { Component } from 'react';

class recallTable extends Component {
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
            campaignList: [],
            campaignKey: "",
            relatedRecall: "",
            vin: "",
            list: []
        };
    }

    componentDidMount(){
        localStorage.removeItem("manufacturer")
        localStorage.removeItem("campaignNumber")
        localStorage.removeItem("PRANumber")
        localStorage.removeItem("datePublished")
        localStorage.removeItem("priority")
        localStorage.removeItem("description")
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

      checkRecalls(key){
          this.state.relatedRecall = false;
          this.state.campaignKey = key;

            if(this.state.campaignKey == this.state.vin){
                this.state.relatedRecall = true;
            }

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
                      <span className="badge badge-light">temp</span>
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
                      <span className="badge badge-light">{item.description}</span>
                      </div>
                      <div className="col-2 result-group">
                      <span className="badge badge-secondary">Rectification date</span><br/>
                      <span className="badge badge-light">{item.description}</span>
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

