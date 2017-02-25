/**
 * Created by Shahen Kosyan on 2/23/17.
 */

import React, {Component} from 'react';
import StarArea from './stars'
import ButtonsArea from './buttons'
import AnswerArea from './answer'
import NumbersArea from './numbers'

class App extends Component {
  constructor(props) {
    super(props);

    this.chooseNumber = this.chooseNumber.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
    this.starsCount = this.starsCount.bind(this);
    this.deselectNumber = this.deselectNumber.bind(this);
    this.state = {
      selectedNumbers: [],
      usedNumbers: [],
      starsCount: Math.floor(Math.random() * 9) + 1,
      correctAnswer: undefined
    };
  }

  chooseNumber(number) {
    this.state.selectedNumbers.push(number);
    this.setState(this.state);
  }

  checkAnswer() {
    if (this.state.correctAnswer === true) {
      while (this.state.selectedNumbers.length) {
        this.state.usedNumbers.push(this.state.selectedNumbers[0]);
        let j = this.state.selectedNumbers.indexOf(this.state.selectedNumbers[0]);
        this.state.selectedNumbers.splice(j, 1);
      }
      this.state.starsCount = this.starsCount();
      this.state.correctAnswer = undefined;
      this.setState(this.state);
    } else if (this.state.correctAnswer === false) {
      this.state.selectedNumbers = [];
      this.state.correctAnswer = undefined;
      this.setState(this.state);
    } else {
      let sum = 0;
      for (let i = 0; i < this.state.selectedNumbers.length; ++i) {
        sum += this.state.selectedNumbers[i];
      }

      if (sum == this.state.starsCount) {
        this.state.correctAnswer = true;
        this.setState(this.state);
      } else {
        this.state.correctAnswer = false;
        this.setState(this.state);
      }
    }
  }

  refreshStars() {
    console.log('refresh');
  }

  starsCount() {
    console.log('yaaay');
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
                         correctAnswer={this.state.correctAnswer} />
          </div>
          <div className="col-5" id="answer">
            <AnswerArea deselectNumber={this.deselectNumber}
                        selectedNumbers={this.state.selectedNumbers} />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12" id="numbers">
            <NumbersArea chooseNumber={this.chooseNumber}
                         selectedNumbers={this.state.selectedNumbers}
                         usedNumbers={this.state.usedNumbers} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
