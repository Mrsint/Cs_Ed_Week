import React from 'react';

function Card(props) {
  return (
    <div className="Card">
       <h1>{props.type} choice</h1>
      <h3>{props.title}</h3>
      <div className = "buttons">
        <button onClick={() => 
        {props.makeChoice(props.type, props.title)}}>Select</button>
        
      
      </div>
    </div>
  );
}

export default Card;
