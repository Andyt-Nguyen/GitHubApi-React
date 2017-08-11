import React, { Component } from 'react';
import UserList from './UserList';

class Users extends Component {
	render() {
		return (
			<div>
				{this.props.user.map( (info, i) =>
					<UserList key={i} {...info}/>
				)}
			</div>
		);
	}
}

export default Users;
