import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <nav className="transparent">
        <div className="nav-wrapper">
          <a href="/" className="red-text brand-logo">WholeLife</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a className="red-text" href="/">Home</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default Navigation
