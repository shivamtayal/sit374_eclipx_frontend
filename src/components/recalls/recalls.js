import React, {Component} from 'react';

import './recalls.css';

class Recalls extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="row">
                <div className="col-4">
                    <h1>Recalls</h1>
                </div>
                <div className="col-4">
                    <h1>Recalls</h1>
                </div>
                <div className="col-4">
                <h1>Recalls</h1>        
                </div>
            </div>
        );
    }
}

export default Recalls;