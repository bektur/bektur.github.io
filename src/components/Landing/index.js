import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
//import Button from './Button'

import './style.css';

class Landing extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <div >
        <div>
          <Link to="/about">About</Link>
        </div>
        <div>
          <Link to="/">Help</Link>
        </div>
      </div>
    );
  }
}

export default Landing;