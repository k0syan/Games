/**
 * Created by Shahen Kosyan on 3/1/17.
 */

import React, {Component} from 'react';

class Square extends Component {
  render() {
    let content = null;
    if (this.props.choice) {
      let className = this.props.choice;
      content = <i className={className}></i>
    }

    return (
      <div className="square">
        {content}
      </div>
    );
  }
}

export default Square;