/**
 * Created by Henrikh Kantuni on 02/23/17.
 */

'use strict';

class HelloMessage extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

ReactDOM.render(
  <HelloMessage name="Shahen" />,
  document.getElementById('root')
);