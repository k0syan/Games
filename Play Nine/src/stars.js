/**
 * Created by Shahen Kosyan on 2/24/17.
 */

import React, {Component} from 'react';

class StarArea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stars: this.props.starsCount
    };
  }

  render() {
    let stars = [];
    for (let i = 0; i < this.state.stars; ++i) {
      stars.push(
        <i className="fa fa-star" key={i.toString()} />
      );
    }

    return (
      <div className="text-center">
        {stars}
      </div>
    );
  }
}

export default StarArea;