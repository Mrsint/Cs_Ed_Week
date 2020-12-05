import React from 'react';
import './App.css';
import Card from './Components/Card';
import Navbar from'./Components/Navbar';
import Dashboard from'./Components/Dashboard';

class App extends React.Component{
      constructor(props){
        super(props)
        this.state = {
            "game": "Please select a game",
            "productivity": "Please select a productivity app",
            "story": "Please select a story",
            "social": "Please select a social app",
            "study:": "Please select a study skills app"

        }
    }

    makeChoice = (type, choice) =>{
        this.setState(state => {
            state[type]= choice
            return state
        } )
    }
render(){
    return (
      <div className="App">
          
          <Navbar/>
          <Dashboard game= {this.state.game} productivity={this.state.productivity} story={this.state.story} social= {this.state.social} study= {this.state.study}/>
          <div className="card-container">
            <Card type = "game" title= "zelda" title2= "tetris" makeChoice= {this.makeChoice}/>
            <Card type = "story" title= "humpty dumpty" title2= "Cat in the hat" makeChoice= {this.makeChoice}/>
            <Card type = "productivity" title= "reminders" title2= "calander" makeChoice= {this.makeChoice}/>
            <Card type = "study" title= "note taking" title2= "flash cards" makeChoice= {this.makeChoice}/>
            <Card type = "social" title= "facebook" title2= "snap chat" makeChoice= {this.makeChoice}/>
           </div>
        </div>
        
  );
}
}

export default App;
