import React, { Component } from 'react'
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'
// import Col from 'react-bootstrap/Col'
// import Row from 'react-bootstrap/Row'

const baseURL = 'http://localhost:3000'

class NewBid extends Component {
  state = {
    price: '',
    material: '',
    location: '',
    delivery: '',
    warranty: '',
    projectId: this.props.location.state.projectId
  }
  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value})
  }
  handleSubmit = (event) => {
    event.preventDefault()
    fetch(baseURL + '/projects' + this.state.projectId + 'bids', {
      method: 'POST',
      body: JSON.stringify(
        {
          price: this.state.price,
          material: this.state.material,
          location: this.state.location,
          delivery: this.state.delivery,
          warranty: this.state.warranty,
        }),
        headers: {
          'Content-Type': 'application/json'
        }
    }).then(res => res.json())
      .then(resJson => {
        this.setState({
          price: '',
          material: '',
          location: '',
          delivery: '',
          warranty: '',
        })
    }).catch(err => console.error({'Error creating Project': err}))
  }
  render()  {
    return(
      <>
        <h1>Create New Bid</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='price'></label>
          <input type='text' id='price' name='price' onChange={this.handleChange} value={this.state.price} placeholder='Bid Estimated Price'/>
          <label htmlFor='materials'></label>
          <input type='text' id='materials' name='materials' onChange={this.handleChange} value={this.state.materials} placeholder='Materials Required'/>
          <label htmlFor='location'></label>
          <input type='text' id='location' name='location' onChange={this.handleChange} value={this.state.location} placeholder='Location of bidder'/>
          <input type='submit' value='Submit'/>
        </form>
      </>
    )
  }
}

export default NewBid
