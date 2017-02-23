/**
 * Created by Shahen Kosyan on 2/24/17.
 */

import React, {Component} from 'react';

class ButtonsArea extends Component {
  render() {
    return (
      <div className="buttons-area">
        <button>
          <span className="glyphicon glyphicon-check"></span>
        </button>
        <button>
          <span className="glyphicon glyphicon-refresh"></span>
        </button>
      </div>
    );
  }
}

export default ButtonsArea;