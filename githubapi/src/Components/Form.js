import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {

	constructor() {
		super();
		this.state = {
			person: ""
		};
		this.getUser = this.getUser.bind(this);
		this.onTitleChange = this.onTitleChange.bind(this);
	}

	onTitleChange(e) {
		this.setState({person: e.target.value})
	}

	getUser(e) {
		e.preventDefault();
		let promise = axios.get(`https://api.github.com/users/${this.state.person}`);
		promise.then( user => this.props.getUser(user.data));
		this.setState({person: ""});
	}

	render() {
		return (
			<form onSubmit={this.getUser}>
				<input
					type="text"
					placeholder="Seach me"
					onChange={this.onTitleChange}
					value={this.state.person} />
			</form>
		);
	}
}
export default Form;
