import React, { Component } from 'react';
import Persistor from "../../util/persistor";
import {Link} from 'react-router-dom';

class vehicleRecall extends Component {
    constructor(props){
        super(props);

        this.state = {
            id: props.match.params.id,
            recallItem: Persistor.getRecallById(props.match.params.id),
        }
    }

    generateRecalls(){
        const data = this.state.recallItem;
        if(data.length >= 1){
            return (
              data.map(e => {
                  return (
                      e.recall.map((r, i) => {
                         return(
                            <Link className="recall-item-link" to={`/campaign/${this.props.id}`}>
                                <li key={i} className="list-group-item">
                                <div className="row">
                                <div className="col">
                                    <span className="badge badge-dark">Priority</span><br/>
                                    {r.meta.priority}
                                </div>
                                <div className="col">
                                    <span className="badge badge-dark">PRA No</span><br/>
                                    {r.meta.PRANumber}
                                </div>
                                <div className="col">
                                    <span className="badge badge-dark">Description</span><br/>
                                    {r.meta.description}
                                </div>
                                <div className="col">
                                    <span className="badge badge-dark">Rectified</span><br/>
                                    {r.meta.rectified}
                                </div>
                                <div className="col">
                                    <span className="badge badge-dark">Rectified Date</span><br/>
                                    {r.meta.rectifiedDate}
                                </div>
                                </div>
                                </li>
                            </Link>    
                         )
                      })
                  );
              })
            );
        } else {
            return <div className="alert alert-warning">Error</div>
        }
    }

    render() {
        return (
            <div className="campaigns">
                <h1>Recalls for vehicle #{this.state.id}</h1>
                <Link className="route-linker btn btn-outline-dark" to={`/recall/${this.state.id}`}>Back To Recall</Link>
                <div className="search">
                    {
                        /*
                        <div className="search-actions">
                            <button className="btn btn-primary">Sort By Manufacturer</button>
                            <button className="btn btn-primary">Sort By Make</button>
                            <button className="btn btn-primary">Sort By Model</button>
                            <button className="btn btn-primary">Sort By Year</button>
                        </div>
                        */
                    }
                    <div className="search-results">
                        <hr/>
                        <ul className="list-group">
                            {this.generateRecalls()}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }

}

export default vehicleRecall