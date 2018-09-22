import React from 'react';

export default function Communications(props) {
    return (
        <div className="detail-communications">
            <div className="alert alert-warning">Currently No Communications</div>
            <h2>Latest Recall Communications</h2><br/>
            <button className="btn btn-primary disabled">New Communication</button>
        </div>
    );
}