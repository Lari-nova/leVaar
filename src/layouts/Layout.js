import React, {Component} from 'react';
import { Link } from 'react-router';

class Layout extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <ul>
              <li><Link to="/">Main Page</Link></li>
              <li><Link to="/about">About us</Link></li>
              <li><Link to="/contacts">Contacts</Link></li>
              <li><Link to="/contacts/5">Contacts 5</Link></li>
            </ul>
          </div>
          <div className="col-8">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;