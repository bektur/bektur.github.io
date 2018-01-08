
import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Landing from './components/Landing';
import About from './components/About';
import NotFound from './components/NotFound';


class App extends Component {
  // componentDidMount() {
  //   setTimeout(this.props.fetchUser, 1000);
  // }

  render() {
    return (
      <div className="container"> 
        <BrowserRouter>
          <div className="container">
            <Route exact path="/" component={Landing} />
            <Route exact path="/about" component={About} />
            <Route path="/not" component={NotFound} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
};

export default App;