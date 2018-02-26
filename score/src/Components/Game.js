import React from 'react';

class Game extends React.Component {
  render() {
    const game = this.props.gameInfo
    return (
      <div className="game">
        <div className="row time">
          {game.time}
        </div>
        <div className="row poss">
          {game.possession}
        </div>
        <div className="row period">
          {game.period}
        </div>
      </div>
    )
  }
}

export default Game;
