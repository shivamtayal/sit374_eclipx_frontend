import React, { Component } from 'react';

import './search.css';


class Search extends Component {

  componentDidMount(){

  }

  render() {
    return (
        <div className="search">
            <div className="search-bar">
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Search Recalls" aria-p="Recall Search Input" aria-describedby="Eclipx" />
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button">Search</button>
                    </div>
                </div>
            </div>
            <div className="search-results">
                <h3>Results:</h3>
                <ul className="list-group">
                    <li className="list-group-item">
                        <div className="row">
                            <div className="col-4 result-group">
                            <span class="badge badge-secondary">Manufacturer</span>
                            <span class="badge badge-light">Manufacturer X</span>
                            </div>
                            <div className="col-4 result-group">
                            <span class="badge badge-secondary">Model</span>
                            <span class="badge badge-light">Model X</span>
                            </div>
                            <div className="col-4 result-group">
                            <span class="badge badge-secondary">Year of Model</span>
                            <span class="badge badge-light">2018</span>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div className="row">
                        <div className="col-4 result-group">
                            <span class="badge badge-secondary">Manufacturer</span>
                            <span class="badge badge-light">Manufacturer X</span>
                            </div>
                            <div className="col-4 result-group">
                            <span class="badge badge-secondary">Model</span>
                            <span class="badge badge-light">Model X</span>
                            </div>
                            <div className="col-4 result-group">
                            <span class="badge badge-secondary">Year of Model</span>
                            <span class="badge badge-light">2018</span>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div className="row">
                        <div className="col-4 result-group">
                            <span class="badge badge-secondary">Manufacturer</span>
                            <span class="badge badge-light">Manufacturer X</span>
                            </div>
                            <div className="col-4 result-group">
                            <span class="badge badge-secondary">Model</span>
                            <span class="badge badge-light">Model X</span>
                            </div>
                            <div className="col-4 result-group">
                            <span class="badge badge-secondary">Year of Model</span>
                            <span class="badge badge-light">2018</span>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div className="row">
                        <div className="col-4 result-group">
                                <span class="badge badge-secondary">Manufacturer</span>
                                <span class="badge badge-light">Manufacturer X</span>
                            </div>
                            <div className="col-4 result-group">
                            <span class="badge badge-secondary">Model</span>
                            <span class="badge badge-light">Model X</span>
                            </div>
                            <div className="col-4 result-group">
                            <span class="badge badge-secondary">Year of Model</span>
                            <span class="badge badge-light">2018</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
  }
}

export default Search;