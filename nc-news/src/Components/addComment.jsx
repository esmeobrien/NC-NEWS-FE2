import React, { Component } from 'react';
import * as api from './api';

class AddComment extends Component {
	state = {
		isLoading: false,
	}
	render() {
		return (
			<div>
				{this.state.isLoading && <p>Posting comment...</p>}
				<form onSubmit={this.handleSubmit}>
				
				</form>
			</div>
		)
	}
}