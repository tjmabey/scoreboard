import React from 'react';

class Possession extends React.Component {
  render() {
    const game = this.props.game;

    let leftSide, rightSide = "grey";

    if (game.possession === 0) {
      leftSide = "red";
      rightSide = "grey";
    } else {
      leftSide = "grey";
      rightSide = "red";
    }


    return (
      <div className="flex flex-row align-items-center justify-content-center">
        <div className={`triangle-left-${leftSide}`}></div>
        <button
          className="btn possession-btn"
          onClick={() => this.props.updatePossession()}
          >Possession</button>
        <div className={`triangle-right-${rightSide}`}></div>
      </div>
    )
  }
}

export default Possession;
