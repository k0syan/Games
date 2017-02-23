/**
 * Created by Shahen Kosyan on 02/23/17.
 */

'use strict';

class HelloMessage extends React.Component {
  render() {
    return (
      <div>Hello {this.props.name}</div>
    );
  }
}

class starArea extends React.Component {
  render() {
    return (
      <div className="star-area"></div>
    );
  }
}

class main extends React.Component {
  render() {
    return (
      <div>
        <HelloMessage name="Shahen"/>
        <starArea className="star-area"/>
      </div>
    );
  }
}

ReactDOM.render(
  <main/>,
  document.getElementById('root')
);