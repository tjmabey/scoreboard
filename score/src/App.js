import React, { Component } from 'react';
import basketball from './css/images/basketball.png';
import './App.css';
import Team from './Components/Team.js';
import Game from './Components/Game.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.resetClock = this.resetClock.bind(this);
    this.updateScore = this.updateScore.bind(this);
    this.updateFoul = this.updateFoul.bind(this);
    this.updatePossession = this.updatePossession.bind(this);
    this.updateClock = this.updateClock.bind(this);
    this.tick = this.tick.bind(this);

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
        'time': 900,
        'running': false,
        'period': 1,
        'possession': 0
      }
    }
  }

  resetClock() {
    const game = {...this.state.game};
    if (game.running) {
      this.updateClock();
    }
    game.time = 900;
    this.setState({game});
  }

  tick() {
    const game = {...this.state.game};
    game.time = game.time - 1;
    this.setState({game});
  }

  updateClock() {
    console.log("clock did update");
    const game = {...this.state.game};
    game.running = !game.running;
    this.setState({game});

    if (game.running) {
      // run clock
      this.clock = setInterval(this.tick, 1000);
    } else {
      clearInterval(this.clock);
    }
  }

  updateScore(teamName, newPoints) {
    const teams = {...this.state.team};
    teamName.points += newPoints;
    this.setState({team: teams});
  }

  updateFoul(teamName, newFoul) {
    const teams = {...this.state.team};
    teamName.fouls += newFoul;
    if (teamName.fouls < 7) {
      teamName.bonus = 0;
    }
    else if (teamName.fouls >= 7 && teamName.fouls < 10) {
      teamName.bonus = 1;
    } else if (teamName.fouls >= 10) {
      teamName.bonus = 2;
    }
    this.setState({team: teams});
  }

  updatePossession() {
    const currentGameState = {...this.state.game};
    currentGameState.possession = (currentGameState.possession === 0 ? 1 : 0);
    this.setState({game: currentGameState});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={basketball} className="App-logo" alt="logo" />
          <h1 className="App-title">Scoreboard</h1>
        </header>
        <div className="content">
          <Team
            side="Home" teamScore={this.state.team.home}
            updateScore={this.updateScore}
            updateFoul={this.updateFoul}
          />
          <Game
            gameInfo={this.state.game}
            updatePossession={this.updatePossession}
            updateClock={this.updateClock}
            resetClock={this.resetClock}
            />
          <Team
            side="Away" teamScore={this.state.team.away}
            updateScore={this.updateScore}
            updateFoul={this.updateFoul}
          />
        </div>
      </div>
    );
  }
}

export default App;
