import React from 'react'
import ReactDOM from 'react-dom'
import CommentApp from './CommentApp'
import './notes.css'

export default function Notes(props) {
  return (
      <div className="detail-notes">
          <div className="alert alert-warning">Currently No Notes</div>
          <h2>Latest Recall Notes</h2><br/>
          <button className="btn btn-primary disabled">New Note</button>
      </div>
  );
  ReactDOM.render(
    <CommentApp />,
    document.getElementById('root')
  )
  }


