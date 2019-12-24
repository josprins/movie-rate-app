import React from 'react';

import Item from './Item';
import Alert from './Alert';

class Search extends React.Component {
	constructor() {
		super();
		this.state = {
			text: '',
			title: '',
			img: '',
			rating: '',
			json: false
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		this.setState({
			title: 'Frozen',
			img: 'https://m.media-amazon.com/images/M/MV5BMTQ1MjQwMTE5OF5BMl5BanBnXkFtZTgwNjk3MTcyMDE@._V1_SX300.jpg',
			rating: '7.5',
			json: true
		});
	}

	handleSubmit = (e) => {
		e.preventDefault();
		fetch(`http://www.omdbapi.com/?t=${this.state.text}&plot=full?&apikey=be77a71d&`)
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					title: json.Title,
					img: json.Poster,
					rating: json.imdbRating,
					json: true
				});
			});
	};

	handleSearch = (e) => {
		e.preventDefault();
		this.setState({ text: e.target.value });
	};

	render() {
		return (
			<div className="form-container">
				<form className="form" onSubmit={this.handleSubmit}>
					<input
						type="text"
						placeholder="Search for movie titles..."
						value={this.text}
						onChange={this.handleSearch}
					/>
					<button>Search</button>
				</form>
				{this.state.img === undefined ? (
					<Alert />
				) : (
					<Item img={this.state.img} title={this.state.title} rating={this.state.rating} />
				)}
			</div>
		);
	}
}

export default Search;
