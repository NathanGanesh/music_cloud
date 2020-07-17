import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';

export default class App extends Component {
	KEY = 'AIzaSyD8yBhF7s4MYB9pbWdSA3ciLqjTTcvqc30';

	state = { videos: [] };

	onTermSubmit = async (term) => {
		const response = await youtube.get('/search', {
			params: {
				part: 'snippet',
				maxResults: 5,
				key: this.KEY,
				q: term
			}
		});
		this.setState({ videos: response.data.items });
    };
    
  

	render() {
		return (
			<div className="ui container">
				<SearchBar onFormSubmit={this.onTermSubmit} />
				<VideoList videos={this.state.videos} />
			</div>
		);
	}
}
