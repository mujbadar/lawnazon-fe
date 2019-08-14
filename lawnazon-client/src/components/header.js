import React, { Component } 		from 'react'
import { Link } 	from 'react-router-dom'

import AccountBox	from '@material-ui/icons/AccountBox'
import LibraryAdd	from '@material-ui/icons/LibraryAdd'
import Eject		from '@material-ui/icons/Eject'
import HomeIcon		from '@material-ui/icons/Home'
import Recent		from '@material-ui/icons/RecentActors'


class Header extends Component {
	render () {
		return (
			<div className='container-fluid header'>
				<div className='row justify-content-around'>
					<div className='col-7'>
            <h1>LawnAzon</h1>
					</div>
							<div className='col-2 row align-self-center'>
								<div className='dropdown offset-6 col-6 justify-content-center'>
									<button className='btn btn-secondary dropdown-toggle' id='dropdownMenu2' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>Menu</button>
									<div className='dropdown-menu dropdown-menu-right' aria-labelledby='dropdownMenu2'>
										<Link to='/'><div className='dropdown-item'>
											<HomeIcon /> Home </div></Link>
										<Link to='/projects'><div className='dropdown-item'>
											<LibraryAdd /> Projects </div></Link>
										<Link to='/Profile'><div className='dropdown-item'>
											<AccountBox /> Profile </div></Link>
										<div className='dropdown-divider' />
										<div className='dropdown-item'>
											<button className='btn btn-primary btn-sm buttonHead' onClick={this.props.logout}><Eject /> Logout </button>
										</div>
									</div>
								</div>
							</div>
				</div>
			</div>
		)
	}
}

export default Header
