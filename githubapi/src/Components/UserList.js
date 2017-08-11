import React from 'react';

const UserList = (props) => {
	return (
		<div className="card" style={{width:"100%", display:'flex'}}>
			<img width="25%" height="25%" src={props.avatar_url} />
			<div>
				<div className="card">
					<h5>UserName: {props.login.toUpperCase()}</h5>
					<h5>Name: {props.name}</h5>
					<h5>Followers: {props.followers}</h5>
					<h5>Following:{props.following}</h5>
				</div>
			</div>
		</div>
	);
}

export default UserList;
