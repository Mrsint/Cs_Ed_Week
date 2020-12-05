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
          <Dashboard game= {this.state.game} productivity={this.state.productivity} story={this.state.story} social= {this.state.social} studySkill= {this.state.studySkill}/>
          <div className="card-container">
            <Card type = "game" title= "flappy bird" makeChoice= {this.makeChoice}/>
            <Card type = "story" title= "zelda" makeChoice= {this.makeChoice}/>
            <Card type = "productivity" title= "reminders" makeChoice= {this.makeChoice}/>
            <Card type = "study" title= "note taking" makeChoice= {this.makeChoice}/>
            <Card type = "social" title= "facebook" makeChoice= {this.makeChoice}/>
           </div>
        </div>
        
  );
}
}

export default App;
