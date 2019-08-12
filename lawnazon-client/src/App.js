import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'

import Header from './components/header.js'
import Project from './components/Projects.js'
import NewAccount from './components/newAccount.js'
import Profile from './components/profile.js'
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
      <Router>
      <div className="App">
          <Header />
          <Route path='/signup' render={() => (
            <NewAccount/>
            )}
          />
          <Route path="/projects" render={() => (
                <Project/>
            )}
          />
          <Route path='/profile' render={() => (
            <Profile/>
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
