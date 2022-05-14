import React from "react";
import "./App.css";

import Avatar from './components/Avatar';
import SocialBar from './components/SocialBar';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Avatar />
				<p>Hello! It's me... Pablo</p>
				<SocialBar />
			</header>
		</div>
	);
}

export default App;
