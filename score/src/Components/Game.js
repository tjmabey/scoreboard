import React from 'react';
import Possession from './Possession.js';
import Time from './Time.js';

class Game extends React.Component {
  render() {
    const game = this.props.gameInfo
    return (
      <div className="game">
        <Time time={game} resetClock={this.props.resetClock}
        startClock={this.props.startClock} stopClock={this.props.stopClock}
        />
        <div className="row poss">
          <Possession game={game} updatePossession={this.props.updatePossession}/>
        </div>
        <div className="row period-label">
          <h2>Period</h2>
        </div>
        <div className="row period numeric-display">
          {game.period}
        </div>
      </div>
    )
  }
}

export default Game;
