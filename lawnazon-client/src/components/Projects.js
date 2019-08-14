import React, { Component } from 'react'
import NewProject from './newProject.js'
import { Link } from 'react-router-dom'

import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'

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
      }, () => {
        console.log(resJson);
      })
    })
    .catch(err => console.error({'Error fetching projects': err}))
  }
  componentDidMount() {
    this.getProjects()
  }
  render() {
    return(
      <div className='container-fluid'>
        <div className='jumbotron bg-white'>
          <NewProject/>
        </div>
        <h1> All projects </h1>
        <hr/>
          <CardGroup>
            {
              this.state.projects.map((project, index) => {
                return (
                  <div key={index}>
                    <Card style={{ width: '18rem'}}>
                      <Card.Body>
                        <Card.Title>{project.name}</Card.Title>
                        <Card.Subtitle>Type: {project.type}</Card.Subtitle>
                        <Card.Text>{project.description}</Card.Text>
                        <Card.Link>
                          <Link to={{
                            pathname: '/project/show',
                            state: {
                              name: project.name,
                              type: project.type,
                              id: project.id,
                              description: project.description,
                              bids: project.bids
                              }
                          }}>See Project</Link>
                        </Card.Link>
                        <Card.Link>
                          <Link to={{
                            pathname: '/project/newbid',
                            state: {
                              id: project.id,
                              }
                          }}>Make a bid</Link>
                        </Card.Link>
                      </Card.Body>
                    </Card>
                </div>
              )
            })
          }
        </CardGroup>
      </div>
    )
  }
}

export default Projects
