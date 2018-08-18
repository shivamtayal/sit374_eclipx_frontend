import React, { Component } from 'react';

import {Link} from 'react-router-dom';

import './navigation.css';

class Nav extends Component {
  render() {
    return (
        <div className="app-navigation">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Eclipx</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link to='/' className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to='/recalls' className="nav-link">Recalls</Link>
                </li>
                <li className="nav-item">
                    <Link to='/search' className="nav-link">Search</Link>
                </li>
                </ul>
            </div>
            </nav>
        </div>
    );
  }
}

export default Nav;