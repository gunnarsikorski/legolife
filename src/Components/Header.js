import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
			<nav>
				<Link to='/'>
					<h2>Lego Collector</h2>
				</Link>
				<Link to='/sets'>Sets</Link>
			</nav>
		);
};

export default Header;