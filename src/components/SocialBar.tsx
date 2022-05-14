import React from "react";

import './SocialBar.css';

import github from '../assets/social/github.png';
import medium from '../assets/social/medium.png';
import twitter from '../assets/social/twitter.png';
import linkedin from '../assets/social/linkedin.png';

class SocialBar extends React.Component {
	render() {
		return < section className="Social-bar" >

			<a href="https://twitter.com/pqzada" target="_blank" rel="noreferrer">
				<img src={twitter} alt="Twitter" />
			</a>

			<a href="https://www.linkedin.com/in/pqzada" target="_blank" rel="noreferrer">
				<img src={linkedin} alt="LinkeIn" />
			</a>

			<a href="https://pqzada.medium.com/" target="_blank" rel="noreferrer">
				<img src={medium} alt="Medium" />
			</a>

			<a href="https://github.com/pqzada" target="_blank" rel="noreferrer">
				<img src={github} alt="Github" />
			</a>

		</section >;
	}
}

export default SocialBar;