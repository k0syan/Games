/**
 * Created by Shahen Kosyan on 2/24/17.
 */

import React, {Component} from 'react';

class ButtonsArea extends Component {
  render() {
    let className = 'btn btn-primary';
    let content = '=';
    let correctAnswer = this.props.correctAnswer;

    if(correctAnswer === true) {
      className = 'btn btn-success';
      content = <i className="fa fa-check-square-o" />;
    } else if(correctAnswer === false) {
      className = 'btn btn-danger';
      content = <i className="fa fa-times-circle-o" />;
    }

    return (
      <div className="btn-group-vertical">
        <button className={className}
                onClick={this.props.checkAnswer}>{content}</button>
        <button className="btn btn-info"
                onClick={this.props.refreshStars}>
          <i className="fa fa-refresh" />
        </button>
      </div>
    );
  }
}

export default ButtonsArea;