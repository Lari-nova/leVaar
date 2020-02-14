import React, {Component} from 'react';

class Contacts extends Component {
  render() {
    return (
      <div>
        <h1>Contacts</h1>
        <p>Email: 1@3.ru</p>
        <p>Telephone: 89561236544</p>
        <p>Office number: {this.props.params.number}</p>
      </div>
    );
  }
}

export default Contacts;