import React from 'react';
import './App.css';
import Card from './Components/Card';
import Navbar from'./Components/Navbar';
import Dashboard from'./Components/Dashboard';

class App extends React.Component{
render(){
    return (
      <div className="App">
          
          <Navbar/>
          <Dashboard/>
          <div className="card-container">
            <Card activity = "Game" />
            <Card activity = "Story"/>
            <Card activity = "Study Skills"/>
            <Card activity = "Productvity"/>
            <Card activity = "Social"/>/>
        </div>
    </div>
  );
}
}

export default App;
