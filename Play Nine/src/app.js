/**
 * Created by Shahen Kosyan on 2/23/17.
 */

import React, {Component} from 'react';
import StarArea from './stars'
import ButtonsArea from './buttons'
import AnswerArea from './answer'
import NumbersArea from './numbers'

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="game">
          <StarArea />
          <ButtonsArea />
          <NumbersArea />
        </div>
        <div className="answer">
          <AnswerArea />
        </div>
      </div>
    );
  }
}

export default App;
