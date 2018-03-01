import React from 'react';
import Possession from './Possession.js';

class Game extends React.Component {
  // constructor() {
  //   super();
  //   this.renderPossession = this.renderPossession.bind(this);
  // }

  // renderPossession(side) {
  //   if (side === 0) {
  //     return (
  //       <div className="flex flex-row">
  //         <div className="triangle-left"></div>
  //         <button
  //           className="btn possession-btn"
  //           onClick={() => this.props.updatePossession()}
  //           >Possession</button>
  //         <div></div>
  //       </div>
  //     )
  //   } else {
  //     return (
  //       <div className="flex flex-row">
  //         <div></div>
  //         <button
  //           className="btn possession-btn"
  //           onClick={() => this.props.updatePossession()}
  //           >Possession</button>
  //         <div className="triangle-right"></div>
  //       </div>
  //     )
  //   }
  //
  // }

  render() {
    const game = this.props.gameInfo
    return (
      <div className="game">
        <div className="row time numeric-display clock-top">
          {game.time}
        </div>
        <div className="row poss">
          <Possession game={game} updatePossession={this.props.updatePossession}/>
        </div>
        <div className="row period-label">
          <h2>Period</h2>
        </div>
        <div className="row period">
          {game.period}
        </div>
      </div>
    )
  }
}

export default Game;
