import React from 'react'

const commentDetail = (props) => {
  
  return (
    <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={props.avater}></img>
        </a>
        <div className="content">
          <a href="/" className="author">
            {props.author}
          </a>
          <div className="metadata">
            <span className="time">{props.timeAgo}</span>
          </div>
          <div className="text">
           {props.comment}
          </div>
        </div>
      </div>
  );
}

export default commentDetail;
