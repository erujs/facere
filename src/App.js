import React, {Component} from 'react';
import {Route, Switch, Link} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Users from '../src/containers/Users/Users';
import ViewUser from '../src/containers/ViewUser/ViewUser';
import {Container, Button} from '@material-ui/core';

class App extends Component {
  render() {
    const notFound = (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <p>
            Edit <code>src/App.js</code> and save to reload.
          </p> */}
          <h1>[404] Page Not Found!</h1>
          <div className="flex-row">
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a> ||
            <Link 
                to='/' 
                className="Link">Go Back
            </Link>
          </div>
        </header>
      </div>
    )
    return (
      <Container maxWidth="lg">
        <Switch>
          <Route path="/user/:id" exact component={ViewUser} />
          <Route path="/" exact component={Users} />
          <Route render={() => notFound} />
        </Switch>
      </Container>
    );
  }
}

export default App;
