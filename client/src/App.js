import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import { Container } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Body from './components/Body';

class App extends Component {
  render () {
    return (
        <div className="App">
          <AppNavbar />
          <Body />
          <Container>
          </Container>
        </div>
    );
  }
}

export default App;
