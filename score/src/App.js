import React, { Component } from 'react';
import basketball from './css/images/basketball.png';
import './App.css';
import Team from './Components/Team.js';
import Game from './Components/Game.js';
import Sound from 'react-sound';
// import * as audio from './Components/audio'

class App extends Component {
  constructor(props) {
    super(props);

    this.resetClock = this.resetClock.bind(this);
    this.updateScore = this.updateScore.bind(this);
    this.updateFoul = this.updateFoul.bind(this);
    this.updatePossession = this.updatePossession.bind(this);
    this.startClock = this.startClock.bind(this);
    this.stopClock = this.stopClock.bind(this);
    this.tick = this.tick.bind(this);
    this.nextPeriod = this.nextPeriod.bind(this);
    // this.startSound = this.startSound.bind(this);
    // this.stopSound = this.stopSound.bind(this);

    // initial default state
    this.defaultState = {
      team: {
        home: {
          'name': 'Home',
          'side': 'home',
          'points': 0,
          'fouls': 0,
          'tol': 3,
          'bonus': 0
        },
        away: {
          'name': 'Away',
          'side': 'away',
          'points': 0,
          'fouls': 0,
          'tol': 3,
          'bonus': 0
        }
      },
      game: {
        'time': 3,
        'quarterLength': 3,
        'running': false,
        'period': 1,
        'numPeriods': 4,
        'possession': 0,
        'buzzer': 'STOPPED'
      }
    }
    this.state = this.defaultState;
  }

  nextPeriod() {
    const game = {...this.state.game};
    if (game.period + 1 <= game.numPeriods) {
      // if there is another quarter/half to play
      game.time = game.quarterLength;
      game.period = game.period + 1;
      if (game.period > game.numPeriods/2) {
        const teams = {...this.state.team};
        teams.away.fouls = 0;
        teams.home.fouls = 0;
        teams.away.tol = 3;
        teams.home.tol = 3;
        this.setState({teams});
      }
      this.clock = setInterval(this.tick, 1000);
      game.running = !game.running;
    }
    this.setState({game});
  }

  resetClock() {
    const game = {...this.state.game};
    if (game.running) {
      game.running = !game.running;
      clearInterval(this.clock);
      this.setState({game});
    }
    this.setState(this.defaultState);
  }

  tick() {
    const game = {...this.state.game};
    game.time = game.time - 1;
    if (game.time === 0) {
      clearInterval(this.clock);
      game.running = !game.running;
      // setTimeout(() => {
      //   game.buzzer = 'PLAYING';
      //   this.setState({game});
      // }, 500);
      // game.buzzer = 'STOPPED';
      this.setState({game});
      // if (game.period === game.numPeriods) {
        // console.log('game over');
      // }
    }
    this.setState({game});
  }

  startClock() {
    const game = {...this.state.game};
    if (!game.running) {
      if (game.time === 0) {
        this.nextPeriod();
      } else {
        this.clock = setInterval(this.tick, 1000);
        game.running = !game.running;
        this.setState({game});
      }
    }
  }

  stopClock() {
    const game = {...this.state.game};
    if (game.running) {
      clearInterval(this.clock);
      game.running = !game.running;
      this.setState({game});
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

  // startSound(sound) {
  //   if (this.sounds[sound]) {
  //     this.sounds[sound].currentTime = 0;
  //     this.sounds[sound].play();
  //   }
  // }
  // stopSound(sound) {
  //   if (this.sounds[sound]) {
  //     this.sounds[sound].pause();
  //   }
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={basketball} className={`App-logo ${(this.state.game.running) ? "" : "pause-animation"}`} alt="logo" />
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
            startClock={this.startClock}
            stopClock={this.stopClock}
            resetClock={this.resetClock}
            />
          <Team
            side="Away" teamScore={this.state.team.away}
            updateScore={this.updateScore}
            updateFoul={this.updateFoul}
          />
        </div>
        <Sound
          url="./assets/horn.mp3"
          playStatus={this.state.game.buzzer}
          playFromPosition={0}/>
      </div>
    );
  }
}

export default App;
