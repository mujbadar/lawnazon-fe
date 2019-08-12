import React, { Component } from 'react';
import Project from './components/Projects.js'
import './App.css';

class App extends Component {
  state = {
    accounts: []
  }
  componentDidMount() {
    this.getAccount()
  }
  getAccount() {
    fetch('/accounts')
      .then(res => res.json())
      .then(json => this.setState({accounts: json}))
      .catch(err => console.error(err))
  }
  handleAddProj = (event, formInputs ) => {
    event.preventDefault()
    fetch('/projects', {
      body: JSON.stringify(formInputs),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then(createdProj => createdProj.json())
    .then(jsonedProj => {
      this.setState({
        projects: [jsonedProj, ...this.state.projects]
      })
    })
    .catch(err => console.log(err))
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <h1>Hello world</h1>
          <Project
            projects={this.state.projects}
            user={this.state.userId}
          />
        </div>
      </div>
    );
  }
}

export default App;
