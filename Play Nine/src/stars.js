/**
 * Created by Shahen Kosyan on 2/24/17.
 */

import React, {Component} from 'react';

class StarArea extends Component {
  render() {
    let indents = [];
    for (let i = 0; i < Math.floor(Math.random() * 9) + 1 ; i++) {
      indents.push(<i key={i.toString()} className="fa fa-star"></i>);
    }
    return (
      <div className="col-5" id="stars">
        <div className="text-center">
          {indents}
        </div>
      </div>
    );
  }
}

export default StarArea;