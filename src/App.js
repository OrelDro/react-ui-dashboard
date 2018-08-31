import React, { Component } from 'react';
import './App.css';
import { data } from './mock-data';

import Header from './components/Header';
import Body from './components/Body';
import LeftMenu from './components/LeftMenu';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: data
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App-LeftMenu">
          <LeftMenu></LeftMenu>
        </div>
        <div className="App-Page">
          <Header></Header>
          <Body data={this.state.data}></Body>
        </div>
      </div>
    );
  }
}

export default App;
