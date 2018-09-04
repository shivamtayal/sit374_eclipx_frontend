import React, { Component } from 'react';

import {Link} from 'react-router-dom';

import './navigation.css';

class Nav extends Component {
    constructor(props){
        super(props);
        this.state = {
            home: true,
            recalls: false,
            search: false
        }
    }

    checkIfActive(path){
        if(this.state[path]){
            return 'active';
        } else {
            return '';
        }
    }

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
                    <li className={"nav-item" + this.checkIfActive('/')} onClick={e => {this.setState({home: true})}}>
                        <Link to='/' className="nav-link">Home</Link>
                    </li>
                    <li className={"nav-item" + this.checkIfActive('/recalls')} onClick={e => {this.setState({recalls: true})}}>
                        <Link to='/recalls' className="nav-link">Recall Manager</Link>
                    </li>
                    <li className={"nav-item" + this.checkIfActive('/search')} onClick={e => {this.setState({search: true})}}>
                        <Link to='/search' className="nav-link">Search Recalls</Link>
                    </li>
                    </ul>
                </div>
                </nav>
            </div>
        );
    }
}

export default Nav;
