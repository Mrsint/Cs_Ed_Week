import React from 'react';

function Card(props) {
  return (
    <div className="Card">
      <h1>Activity</h1>
      <h3>{props.activity}</h3>
    </div>
  );
}

export default Card;
