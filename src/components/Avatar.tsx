import React from "react";

import './Avatar.css';
import avatar from '../assets/avatar.jpg';

class Avatar extends React.Component {
	render() {
		return <div className="Avatar">
			<img src={avatar} alt="Pablo Quezada" />
		</div>
	}
}

export default Avatar;