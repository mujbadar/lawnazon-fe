import React, { Component } from 'react'
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'
// import Col from 'react-bootstrap/Col'
// import Row from 'react-bootstrap/Row'

class NewProject extends Component {
  state = {
    name: '',
    type: '',
    description: '',
    t_frame: '',
    budget: '',
  }
  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value})
  }
  handleSubmit = (event) => {
    event.preventDefault()
    fetch('/accounts/' + this.props.account_id + '/projects', {
      method: 'POST',
      body: JSON.stringify(
        {
          name: this.state.name,
          type: this.state.type,
          description: this.state.description,
          t_frame: this.state.t_frame,
          budget: this.state.budget,
          account_id: this.props.account_id
        }),
        headers: {
          'Content-Type': 'application/json'
        }
    }).then(res => res.json())
      .then(resJson => {
        this.setState({
          name: '',
          type: '',
          description: '',
          t_frame: '',
          budget: '',
        })
    }).catch(err => console.error({'Error creating Project': err}))
  }
  render()  {
    return(
      <>
        <h1>Create New Project</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='name'></label>
          <input type='text' id='name' name='name' onChange={this.handleChange} value={this.state.name} placeholder='Project Name'/>
          <label htmlFor='type'></label>
          <input type='text' id='type' name='type' onChange={this.handleChange} value={this.state.type} placeholder='Project Type'/>
          <label htmlFor='description'></label>
          <input type='text' id='description' name='description' onChange={this.handleChange} value={this.state.description} placeholder='Project Description'/>
          <input type='submit' value='Submit'/>
        </form>
      </>
    )
  }
}

export default NewProject
