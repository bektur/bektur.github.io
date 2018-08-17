import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import './style.css';

export default class About extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <div >
        <p className="App-intro">
          Studying in the US
        </p>
        <p>
          Nee help with getting into to Universities in the US?
          We focus on high school students to achieve their dreams. We
          offer guidance on what steps to follow in order to get into Universities
          in the US. 
        </p>
      </div>
    );
  }
}