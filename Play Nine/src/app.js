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
      <div className="container" id="app">
        <div className="row mt-5">
          <StarArea />
          <ButtonsArea />
          <AnswerArea />
        </div>
        <div className="row mt-5">
          <NumbersArea />
        </div>
      </div>
    );
  }
}

export default App;
