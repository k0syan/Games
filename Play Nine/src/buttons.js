/**
 * Created by Shahen Kosyan on 2/24/17.
 */

import React, {Component} from 'react';

class ButtonsArea extends Component {
  render() {
    return (
      <div className="col-2" id="actions">
        <div className="btn-group-vertical">
          <button className="btn btn-primary">=</button>
          <button className="btn btn-info">
            <i className="fa fa-refresh"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default ButtonsArea;