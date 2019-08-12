import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    accounts: []
  }
  componentDidMount() {
    this.getData()
  }
  getData() {
    fetch('/accounts')
      .then(res => res.json())
      .then(json => this.setState({accounts: json}))
      .catch(err => console.error(err))
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <h1>Hello world</h1>
        </div>
      </div>
    );
  }
}

export default App;
