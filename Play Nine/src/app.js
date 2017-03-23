/**
 * Created by Shahen Kosyan on 2/23/17.
 */

import React, {Component} from 'react';
import StarArea from './stars'
import ButtonsArea from './buttons'
import AnswerArea from './Answer'
import NumbersArea from './numbers'

class App extends Component {
  constructor(props) {
    super(props);

    this.chooseNumber = this.chooseNumber.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
    this.starsCount = this.starsCount.bind(this);
    this.deselectNumber = this.deselectNumber.bind(this);
    this.refreshStars = this.refreshStars.bind(this);
    this.startNewGame = this.startNewGame.bind(this);
    this.checkGameStatus = this.checkGameStatus.bind(this);
    this.possibility = this.possibility.bind(this);
    this.state = {
      selectedNumbers: [],
      usedNumbers: [],
      starsCount: this.starsCount(),
      correctAnswer: undefined,
      refreshCount: 5,
      gameStatus: undefined
    };
  }

  startNewGame() {
    this.state = {
      selectedNumbers: [],
      usedNumbers: [],
      starsCount: this.starsCount(),
      correctAnswer: undefined,
      refreshCount: 5,
      gameStatus: undefined
    };
    this.setState(this.state);
  }

  chooseNumber(number) {
    this.state.selectedNumbers.push(number);
    this.setState(this.state);
  }

  possibility() {
    let possibleNumbers = [];
    let possibleValues = {
      1: [[1]],
      2: [[2]],
      3: [[1, 2]],
      4: [[1, 3]],
      5: [[1, 4], [2, 3]],
      6: [[1, 5], [2, 4], [1, 2, 3]],
      7: [[1, 6], [2, 5], [3, 4], [1, 2, 4]],
      8: [[1, 7], [2, 6], [3, 5], [1, 2, 5], [1, 3, 4]],
      9: [[1, 8], [2, 7], [3, 6], [4, 5], [1, 2, 6], [1, 3, 5], [2, 3, 4]]
    };
    let starsCount = this.state.starsCount;
    for (let i = 1; i <= starsCount; ++i) {
      possibleNumbers.push(i);
    }

    for (let i = 0; i < this.state.usedNumbers.length; ++i) {
      let n = this.state.usedNumbers[i];
      if (possibleNumbers.indexOf(n) > -1) {
        possibleNumbers.splice(possibleNumbers.indexOf(n), 1)
      }
    }

    if (possibleNumbers.indexOf(starsCount) > -1) {
      return undefined;
    }

    for (let i = 0; i < possibleValues[starsCount].length; ++i) {
      let arr = possibleValues[starsCount][i];
      let s = false;
      for (let j = 0; j < arr.length; ++j) {
        if (possibleNumbers.indexOf(arr[j]) > -1) {
          s = true;
        } else {
          s = false;
          break;
        }
      }
      if (s) {
        return undefined;
      }
    }

    return false;
  }

  checkGameStatus() {
    let state = this.state;
    let status = undefined;
    if (state.usedNumbers.length === 9) {
      status = true;
    } else {
      if (state.refreshCount === 0) {
        status = this.possibility();
      }
    }

    state.gameStatus = status;
    this.setState(state);
  }

  checkAnswer() {
    let state = this.state;
    if (state.correctAnswer === true) {
      while (state.selectedNumbers.length) {
        state.usedNumbers.push(state.selectedNumbers[0]);
        let j = state.selectedNumbers.indexOf(state.selectedNumbers[0]);
        state.selectedNumbers.splice(j, 1);
      }
      state.starsCount = this.starsCount();
      state.correctAnswer = undefined;
    } else if (state.correctAnswer === false) {
      state.selectedNumbers = [];
      state.correctAnswer = undefined;
    } else {
      let sum = 0;
      for (let i = 0; i < state.selectedNumbers.length; ++i) {
        sum += state.selectedNumbers[i];
      }

      state.correctAnswer = state.starsCount === sum;
    }
    this.checkGameStatus();
    this.setState(state);
  }

  refreshStars() {
    let state = this.state;
    state.refreshCount -= 1;
    state.starsCount = this.starsCount();
    this.setState(state);

    this.checkGameStatus();
  }

  starsCount() {
    return Math.floor(Math.random() * 9) + 1;
  }

  deselectNumber(number) {
    let i = this.state.selectedNumbers.indexOf(number);

    if (i > -1) {
      this.state.selectedNumbers.splice(i, 1);
      this.setState(this.state);
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Play Nine</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p className="lead">Have fun!</p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-5" id="stars">
            <StarArea starsCount={this.state.starsCount} />
          </div>
          <div className="col-2" id="actions">
            <ButtonsArea checkAnswer={this.checkAnswer}
                         refreshStars={this.refreshStars}
                         correctAnswer={this.state.correctAnswer}
                         refreshCount={this.state.refreshCount} />
          </div>
          <div className="col-5" id="answer">
            <AnswerArea deselectNumber={this.deselectNumber}
                        selectedNumbers={this.state.selectedNumbers} />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12" id="numbers">
            <NumbersArea chooseNumber={this.chooseNumber}
                         startNewGame={this.startNewGame}
                         selectedNumbers={this.state.selectedNumbers}
                         usedNumbers={this.state.usedNumbers}
                         gameStatus={this.state.gameStatus} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
