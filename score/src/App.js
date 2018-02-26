import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Team from './Components/Team.js';
import Game from './Components/Game.js';

class App extends Component {
  constructor() {
    super();

    // initial default state
    this.state = {
      team: {
        home: {
          'name': 'Home',
          'points': 0,
          'fouls': 0,
          'tol': 3,
          'bonus': 0
        },
        away: {
          'name': 'Away',
          'points': 0,
          'fouls': 0,
          'tol': 3,
          'bonus': 0
        }
      },
      game: {
        'time': 0,
        'period': 1,
        'possession': 0
      }
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="content">
          <Team side="Home" teamScore={this.state.team.home}/>
          <Game gameInfo={this.state.game} />
          <Team side="Away" teamScore={this.state.team.away}/>
        </div>
      </div>
    );
  }
}

export default App;
