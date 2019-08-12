import React, { Component } from 'react'


class Projects extends Component {
  state = {
    projects: []
  }
  getProjects = () => {
    fetch('/projects', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(resJson => console.log(resJson))
    .catch(err => console.log(err))
  }
  componentDidMount() {
    this.getProjects()
  }
  render() {
    return(
      <h1>Projects</h1>
    )
  }
}

export default Projects
