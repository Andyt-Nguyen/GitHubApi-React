import React, { Component } from 'react';
import UserList from './UserList';

const Users = (props) => {
		return (
			<div>
				{props.user.map( (info, i) =>
					<UserList key={i} {...info}/>
				)}
			</div>
		);
}

export default Users;
