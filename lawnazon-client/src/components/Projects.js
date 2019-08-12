import React, { Component } from 'react'
import NewProject from './newProject.js'


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
    .then(resJson => {
      this.setState({
        projects: resJson
      })
    })
    .catch(err => console.error({'Error fetching projects': err}))
  }
  componentDidMount() {
    this.getProjects()
  }
  render() {
    return(
      <>
      <h1>Projects</h1>
      <div>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Project Name</th>
              <th>Project Description</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.projects.map((projects, index) => {
                return (
                  <tr key={index}>
                    <th>{index}</th>
                    <th>{projects.name}</th>
                    <th>{projects.description}</th>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
        <NewProject/>
        </div>
      </>
    )
  }
}

export default Projects
