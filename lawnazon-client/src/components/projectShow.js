import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'


class ProjectShow extends Component {
  state = {
    name: this.props.location.state.name,
    type: this.props.location.state.type,
    description: this.props.location.state.description,
    t_frame: this.props.location.state.t_frame,
    budget: this.props.location.state.budget,
    id: this.props.location.state.id,
    bids: this.props.location.state.bids
  }
  componentDidMount(){
    console.log(this.state.bids)
    console.log(this.state.budget)
  }
  render() {
    return (
      <div className='container-fluid'>
      <h1>{this.state.name}</h1>
      <h3>Description: {this.state.description}</h3>
      <h5>Urgent Delivery: {this.state.t_frame}</h5>
      <h5>High Budget: {this.state.budget}</h5>
      <h5><Link to={{
        pathname: '/project/newbid',
        state: {
          projectId: this.state.id
        }
      }}>Create new bid</Link></h5>
      <hr/>
      <CardGroup>
      {
        this.state.bids.map((bid, index) => {
          return (
            <div key={index}>
              <Card style={{ width: '18rem'}}>
                <Card.Body>
                  <Card.Title>{bid.bidder_name}</Card.Title>
                  <Card.Subtitle>{bid.location}</Card.Subtitle>
                  <Card.Text>{bid.materials}</Card.Text>
                  <Card.Text>Warranty offered? {bid.warranty}</Card.Text> <Card.Text>Delivery offered? {bid.delivery}</Card.Text>
                  <Card.Text>Price Qoute: ${bid.price}</Card.Text>
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

export default ProjectShow
