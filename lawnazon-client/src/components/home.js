import React 		from 'react'
import NewAccount from './newAccount.js'

class Home extends React.Component {
	render () {
		return (
			<div className='container-fluid'>
				<div className='container jumbotron bg-white rounded'>
					<h2 className='display-4'>Your project resource</h2>
					<p className='lead'>Pitch your projects and get the best bids online. Easy and fast.</p>
          <hr/>
			    <NewAccount />
				</div>
			</div>
		)
	}
}

export default Home
