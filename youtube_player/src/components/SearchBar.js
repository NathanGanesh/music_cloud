import React, { Component } from 'react';

export default class SearchBar extends Component {
	state = { term: '' };

	onInputChange = (event) => {
		this.setState({ term: event.target.value });
	};

	onFormSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.term);
    };

	render() {
		return (
			<div className="search-bar ui segment">
				<form onSubmit={this.onFormSubmit} className="ui form">
					<div className="field">
						<label>Video search</label>
						<input onChange={this.onInputChange} value={this.state.term} type="text" />
						<p>{this.state.term}</p>
					</div>
				</form>
			</div>
		);
	}
}
