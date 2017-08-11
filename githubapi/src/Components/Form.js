import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
	constructor() {
		super();
		this.state = {
			person: {}
		};
		this.getUser = this.getUser.bind(this);
	}

	getUser(e) {
		e.preventDefault();
		let promise = axios.get('https://api.github.com/users/mojombo');
		promise.then( user => this.props.getUser(user.data));
	}

	render() {
		return (
			<form onSubmit={this.getUser}>
				<input
					type="text"
					placeholder="Seach me" />
			</form>
		);
	}
}
export default Form;
