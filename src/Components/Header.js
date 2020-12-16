import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

const Header = () => {
    const [anchor, setAnchor] = useState(null)

    const handleClick = (event) => {
			setAnchor(event.currentTarget);
		};

	const handleClose = () => {
			setAnchor(null);
        };
        
    return (
			<div>
				<Button
					aria-controls='simple-menu'
					aria-haspopup='true'
					onClick={handleClick}>
					Menu
				</Button>
				<Menu
					id='simple-menu'
					anchorEl={anchor}
					keepMounted
					open={Boolean(anchor)}
					onClose={handleClose}>
					<MenuItem onClick={handleClose}>
						<Link to='/'>
							<h2>Lego Collector</h2>
						</Link>
					</MenuItem>
					<MenuItem onClick={handleClose}>
						<Link to='/sets'>Sets</Link>
					</MenuItem>
					<MenuItem onClick={handleClose}>
						<Link to='/wishlist'>Wishlist</Link>
					</MenuItem>
				</Menu>
			</div>
		);
};

export default Header;