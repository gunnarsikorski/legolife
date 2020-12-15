import React from 'react';
import { Link } from 'react-router-dom';
import {  } from "@material-ui/core/";

const Header = () => {
    return (
			<nav>
				<Link to='/'>
					<h2>Lego Collector</h2>
				</Link>
				<Link to='/sets'>Sets</Link>
                <Link to='/wishlist'>Wishlist</Link>
			</nav>
		);
};

export default Header;