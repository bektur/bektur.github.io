import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

import logo from './logo.svg';
import './style.css';

class App extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('App', className)} {...props}>
        <div className="App-header">
          <h2>Welcome to React Tutorial</h2>
            
        </div>
        <p className="App-intro">
          Best frontend library for building sigle page apps
        </p>
        <div>
          <Link to="/about">What is React</Link>
        </div>
        <div>
          <Link to="/about">Props and states</Link>
        </div>
      </div>
    );
  }
}

export default App;