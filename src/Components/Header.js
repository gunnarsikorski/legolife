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
					style={{ marginBottom: '20px', marginTop: '20px' }}
					size='large'
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
						<Link to='/search' style={{ textDecoration: 'none' }}>
							<h3>Search</h3>
						</Link>
					</MenuItem>
					<MenuItem onClick={handleClose}>
						<Link to='/sets' style={{ textDecoration: 'none' }}>
							<h3>All Sets</h3>
						</Link>
					</MenuItem>
					<MenuItem onClick={handleClose}>
						<Link to='/wishlist' style={{ textDecoration: 'none' }}>
							<h3>Wishlist</h3>
						</Link>
					</MenuItem>
					<MenuItem onClick={handleClose}>
						<Link to='/owned' style={{ textDecoration: 'none' }}>
							<h3>Owned</h3>
						</Link>
					</MenuItem>
				</Menu>
			</div>
		);
};

export default Header;