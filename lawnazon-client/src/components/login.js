import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const baseURL = 'http://localhost:3000'

class Login extends Component {
  state = {
    user_name: '',
    password: '',
    wrongPass: false,
    wrongUser: false
  }
  _isMounted = false

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value})
  }
  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      wrongUser: false,
      wrongPass: false
    })
    fetch(baseURL + '/accounts/login', {
      method: 'POST',
      body: JSON.stringify(
        {
          user_name: this.state.user_name,
          password: this.state.password
        }),
        headers: {
          'Content-Type': 'application/json'
        }
    })
    .then (res => res.json())
    .then(resJson => this.props.getAccount(resJson))
    .catch (err => console.log('error'))
  }

  componentDidMount() {
    this._isMounted = true
  }
  componentWillUnmount(){
    this._isMounted = false
  }
  render() {
    return (
      <div className='dropdown offset-6 col-6 justify-content-center'>
				<button className='btn btn-secondary dropdown-toggle' id='dropdownMenu' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>Log In</button>
				<div className='dropdown-menu dropdown-menu-right' aria-labelledby='dropdownMenu'>
					<form className='px-4 py-3' onSubmit={this.handleSubmit}>
						{
							this.state.wrongUser ? <small className='text-danger'>Wrong UserName</small> : null
						}
						<div className='form-group'>
							<label htmlFor='user_name'></label>
							<input type='text' id='user_name' name='user_name' onChange={this.handleChange} value={this.state.user_name} placeholder='User Name' required/>
						</div>
						{
							this.state.wrongPass ? <small className='text-danger'>Wrong Password</small> : null
						}
						<div className='form-group'>
							<label htmlFor='password'></label>
							<input type='password' id='password' name='password' onChange={this.handleChange} value={this.state.password} placeholder='Password' required/>
						</div>
						<input className='btn btn-primary' type='submit' value='Sign In'/>
					</form>
					<div className='dropdown-divider' />
					<Link to='/Create'><div className='dropdown-item'>
						New around here? Sign up!
					</div></Link>
				</div>
			</div>
		)
  }
}

export default Login
