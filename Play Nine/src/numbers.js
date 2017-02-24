/**
 * Created by Shahen Kosyan on 2/24/17.
 */

import React, {Component} from 'react';

class NumbersArea extends Component {
  render() {
    return (
      <div className="col-12" id="numbers">
        <div className="text-center">
          <button className="btn btn-secondary">1</button>
          <button className="btn btn-secondary">2</button>
          <button className="btn btn-secondary">3</button>
          <button className="btn btn-secondary">4</button>
          <button className="btn btn-secondary">5</button>
          <button className="btn btn-secondary">6</button>
          <button className="btn btn-secondary">7</button>
          <button className="btn btn-secondary">8</button>
          <button className="btn btn-secondary">9</button>
        </div>
      </div>
    );
  }
}

export default NumbersArea;