import React, { Component } from 'react';
import Form from './Form';
import Users from './Users';

class GitHub extends Component {
	constructor() {
		super();
		this.state = {
			person: []
		};
	}

	handleUser(user) {
		this.setState(prevState => ({
			person: prevState.person.concat(user)
		}));
	}

	render() {
		return (
			<div>
				<h1 className="center">Github Profile</h1>
				<div>
					<Users user={this.state.person} />
				</div>
				<Form getUser={this.handleUser.bind(this)}/>
			</div>
		)
	}
}

export default GitHub;
