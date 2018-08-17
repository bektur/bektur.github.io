
import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import Header from '../components/Header/Header';
import Landing from '../components/Landing';
import About from '../components/About';
import NotFound from '../components/NotFound';


class App extends Component {

  state = {users: []}
  
  // componentDidMount() {
  //   fetch('/users')
  //     .then(res => res.json())
  //     .then(users => this.setState({ users }));
  // }

  render() {
    return (
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/about" component={About} />
            <Route component={NotFound} />
            </Switch>
          </div>
        </BrowserRouter>
    );
  }
};

export default App;