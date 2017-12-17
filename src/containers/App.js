import React from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
const classNames = require('classnames');

import Application from '../components/Application';
import Applications from '../components/Applications';
import { getApplications } from '../actions/applications';

class App extends React.Component  {

  componentWillMount () {
    this.props.getApplications()
  }
  
  render(){

console.log(22)
    return (
      <Router>
        <main>
          <Route/>
          <div>
            <Switch>
              <Route exact path="/" component={Applications}/>
              <Route path="/applications/:id" component={Application} />
            </Switch>
          </div>
        </main>
      </Router>
    );
  }
}

export default connect(null, {getApplications})(App);

