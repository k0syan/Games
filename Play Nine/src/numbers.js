/**
 * Created by Shahen Kosyan on 2/24/17.
 */

import React, {Component} from 'react';

class NumbersArea extends Component {
  render() {
    let numbers = [];
    for (let i = 1; i < 10; ++i) {
      let className, disabled = false,
        isSelected = this.props.selectedNumbers.indexOf(i) > -1,
        isUsed = this.props.usedNumbers.indexOf(i) > -1;

      if (isSelected) {
        className = 'btn btn-secondary active';
        disabled = true;
      } else if (isUsed) {
        className = 'btn btn-success';
        disabled = true;
      } else {
        className = 'btn btn-secondary';
      }
      numbers.push(
        <button className={className}
                disabled={disabled}
                key={i.toString()}
                onClick={this.props.chooseNumber.bind(null, i)}>
          {i}
        </button>
      );
    }

    if (this.props.gameStatus === true) {
      numbers = [];
      numbers.push(<span key={'You won'}>Congratulations you won!!!</span>);
      numbers.push(<button className="btn" onClick={this.props.startNewGame} key={'New Game'}>New Game</button>);
    } else if (this.props.gameStatus === false) {
      numbers = [];
      numbers.push(<span key={'You lose'}>Sorry you lose :( </span>);
      numbers.push(<button className="btn" onClick={this.props.startNewGame} key={'New Game'}>New Game</button>);
    }

    return (
      <div className="text-center">
        {numbers}
      </div>
    );
  }
}

export default NumbersArea;
