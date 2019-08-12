import React, { Component } from 'react'

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
    }).then(res => res.json())
      .then(resJson => {
        this.setState({
          user_name: '',
          f_name: '',
          l_name: '',
          location: '',
          bio: '',
          img: ''
        })
    }).catch(err => console.error({'Error creating Account': err}))
  }
  render()  {
    return(
      <>
        <h1>Create New Account</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='user_name'></label>
          <input type='text' id='user_name' name='user_name' onChange={this.handleChange} value={this.state.user_name} placeholder='User Name'/>
          <label htmlFor='f_name'></label>
          <input type='text' id='f_name' name='f_name' onChange={this.handleChange} value={this.state.f_name} placeholder='First Name'/>
          <label htmlFor='l_name'></label>
          <input type='text' id='l_name' name='l_name' onChange={this.handleChange} value={this.state.l_name} placeholder='Last Name'/>
          <label htmlFor='location'></label>
          <input type='text' id='location' name='location' onChange={this.handleChange} value={this.state.location} placeholder='Location'/>
          <label htmlFor='bio'></label>
          <input type='text' id='bio' name='bio' onChange={this.handleChange} value={this.state.l_name} placeholder='Some info about you'/>
          <label htmlFor='img'></label>
          <input type='text' id='img' name='img' onChange={this.handleChange} value={this.state.img} placeholder='Image'/>
          <input type='submit' value='Submit'/>
        </form>
      </>
    )
  }
}

export default NewAccount
