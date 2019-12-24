import React from 'react';
import './App.css';

import Search from './components/Search';

class App extends React.Component {
	render() {
		return (
			<div className="container">
				<Search />
			</div>
		);
	}
}

export default App;
