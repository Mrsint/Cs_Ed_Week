import React from 'react';

function Dashboard(props) {
  return (
    <div className="Dashboard">

        <h1>Available Activities</h1>
        <div className ="apps">
          <p className="app"> Games: {props.game}  </p>
          <p className="app"> Story:  {props.story} </p>
          <p className="app"> Prodocutivity:{props.productivity}  </p>
          <p className="app"> Study Skills:{props.study} </p>
          <p className="app"> Social: {props.social}</p>
        </div>
      </div>
  );
}

export default Dashboard;
