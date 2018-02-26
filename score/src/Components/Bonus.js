import React from 'react';

class Bonus extends React.Component {
  render() {
    const team = this.props.team
    let bonusText;
    let firstCircle="grey";
    let secondCircle="grey";
    let bonus = <span>Bonus</span>;
    if (team.bonus === 0) {
      firstCircle = "grey";
      secondCircle = "grey";
    } else if (team.bonus === 1){
      firstCircle = "red";
      secondCircle = "grey";
    } else if (team.bonus === 2) {
      firstCircle = "red";
      secondCircle = "red";
    }

    return (
      <div className="bonus-container">
        <div className="bonus-text">
          {bonus}
        </div>
        <div className="bonus-circles">
          <div className={`circle-${firstCircle}`}></div>
          <div className={`circle-${secondCircle}`}></div>
        </div>
      </div>
    )
  }
}

export default Bonus;
