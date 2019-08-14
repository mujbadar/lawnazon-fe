import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'

import Header from './components/header.js'
import Home	from './components/home.js'
import Login from './components/login.js'
import Project from './components/projects.js'
import NewAccount from './components/newAccount.js'
import Profile from './components/profile.js'
import ProjectShow from './components/projectShow.js'
import NewBid from './components/newBid.js'
import './App.css';

class App extends Component {
  state = {
    currentAccount: '',
    firstName: '',
    lastName: '',
    id: '',
    projects: []
  }
  componentDidMount() {
    console.log(this.state.id);
  }
  getAccount(account) {
    this.setState({
      currentAccount : account.user_name,
      firstName: account.f_name,
      lastName: account.l_name,
      id: account.id,
      projects: account.projects
    }, console.log(account))
  }
  render() {
    return (
      <>
      <Router>
      <div className="App">
          <Header />
          <Login getAccount={this.getAccount}/>
          <Route path='/' exact component={Home} />
          <Route path='/signup' render={() => (
            <NewAccount/>
            )}
          />
          <Route path="/projects" render={(routeProps) => (
                <Project {...routeProps} user_id={this.state.id}/>
            )}
          />
          <Route path='/project/show' render={(routeProps) => (
            <ProjectShow {...routeProps}/>
          )}
          />
          <Route path='/project/newbid' render={(routeProps) => (
            <NewBid {...routeProps}/>
          )}
          />
          <Route path='/profile' render={() => (
            <Profile state={this.state}/>
            )}
          />
        </div>
      </Router>
      </>
    );
  }
}

export default App;
