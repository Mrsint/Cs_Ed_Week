import React from 'react';

function Card(props) {
  return (
    <div className="Card">
       <h1>{props.type} choice</h1>
      <h3>{"select"}</h3>
      <div className = "buttons">
        <button onClick={() => {props.makeChoice(props.type, props.title)}}>{props.title}</button>
        <button onClick={() => {props.makeChoice(props.type, props.title2)}}>{props.title2}</button>
        
      
      </div>
    </div>
  );
}

export default Card;
