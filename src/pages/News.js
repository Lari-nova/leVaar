import React, { Component } from 'react';
import NewsList from '../components/NewsList';

export default class Users extends Component {
  render() {
    return (
      <div>
        {
          (!this.props.children) ?
            (<NewsList />)
            :
            (this.props.children)
        }
      </div>
    )
  }
}