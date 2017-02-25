/**
 * Created by Shahen Kosyan on 2/24/17.
 */

import React, {Component} from 'react';

class AnswerArea extends Component {
  render() {
    let selectedNumbers = [];
    for (let i = 0; i < this.props.selectedNumbers.length; ++i) {
      selectedNumbers.push(
        <button className="btn btn-secondary"
                key={this.props.selectedNumbers[i].toString()}
                onClick={this.props.deselectNumber.bind(null, this.props.selectedNumbers[i])}>
          {this.props.selectedNumbers[i]}
        </button>
      );
    }

    if (selectedNumbers.length === 0) {
      return null;
    }

    return (
      <div className="text-center">
        {selectedNumbers}
      </div>
    );
  }
}

export default AnswerArea;