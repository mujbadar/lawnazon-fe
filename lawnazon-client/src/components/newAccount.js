import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const baseURL = 'http://localhost:3000'

class NewAccount extends Component {
  state = {
    user_name: '',
    f_name: '',
    l_name: '',
    location: '',
    bio: '',
    img: ''
  }
  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value})
  }
  handleAddAccount = (account) => {
    this.setState({
      user_name: this.state.user_name,
      f_name: this.state.f_name,
      l_name: this.state.l_name,
      location: this.state.location,
      bio: this.state.bio,
      img: this.state.img
    })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    fetch('/accounts', {
      method: 'POST',
      body: JSON.stringify(
        {
          user_name: this.state.user_name,
          f_name: this.state.f_name,
          l_name: this.state.l_name,
          location: this.state.location,
          bio: this.state.bio,
          img: this.state.img
        }),
        headers: {
          'Content-Type': 'application/json'
        }
    }).then(res => console.log(res))
      .then(resJson => {
        this.setState({
          user_name: '',
          f_name: '',
          l_name: '',
          location: '',
          bio: '',
          img: ''
        }, console.log(resJson))
    }).catch(err => console.error({'Error creating Account': err}))
  }
  render()  {
    return(
      <>
        <h1>Create New Account</h1>
        <Form onSubmit={this.handleSubmit}>
          <Row>
            <Col>
              <Form.Label htmlFor='f_name'></Form.Label>
              <Form.Control type='text' id='f_name' name='f_name' onChange={this.handleChange} value={this.state.f_name} placeholder='First Name'/>
            </Col>
            <Col>
              <Form.Label htmlFor='l_name'></Form.Label>
              <Form.Control type='text' id='l_name' name='l_name' onChange={this.handleChange} value={this.state.l_name} placeholder='Last Name'/>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label htmlFor='user_name'></Form.Label>
              <Form.Control type='text' id='user_name' name='user_name' onChange={this.handleChange} value={this.state.user_name} placeholder='User Name'/>
            </Col>
            <Col>
              <Form.Label htmlFor='location'></Form.Label>
              <Form.Control type='text' id='location' name='location' onChange={this.handleChange} value={this.state.location} placeholder='Location'/>
            </Col>
          </Row>
          <Form.Group>
            <Form.Label htmlFor='bio'></Form.Label>
            <Form.Control as='textarea' rows='3' type='text' id='bio' name='bio' onChange={this.handleChange} value={this.state.bio} placeholder='More Information about you'/>
          </Form.Group>
            <Form.Label htmlFor='img'></Form.Label>
            <Form.Control type='text' id='img' name='img' onChange={this.handleChange} value={this.state.img} placeholder='Image URL'/>
          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </>
    )
  }
}

export default NewAccount
