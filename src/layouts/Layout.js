import React from 'react';
import Menu from '../components/Menu';
import MenuItem from '../components/MenuItem';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.brand = 'News blog';
  }

  isActive(href) {
    return window.location.pathname === href;
  }

  render() {
    return (
      <>
        <Menu brand={this.brand}>
          <MenuItem href="/" active={this.isActive('/')}>
            Main page
          </MenuItem>
          <MenuItem href="/news" active={this.isActive('/news')}>
            News
          </MenuItem>
          <MenuItem href="/comments" active={this.isActive('/comments')}>
            Comments
          </MenuItem>
        </Menu>
        <div className="container">
          <div className="row">
            <div className="col-12">
              {this.props.children}
            </div>
          </div>
        </div>
        <footer className="card-footer">
          &copy; 2020
        </footer>
      </>
    )
  }
}