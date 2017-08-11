import React, { Component } from 'react';
import UserList from './UserList';

class Users extends Component {
	render() {
		console.log(this.props);
		return (
			<div>
				<UserList />
			</div>
		);
	}
}

export default Users;
