import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import LoyaltyIcon from '@material-ui/icons/Loyalty'
import AddIcon from '@material-ui/icons/Add';
// import localStorage from 'local-storage';
// import clsx from 'clsx';
import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
// import Collapse from '@material-ui/core/Collapse';
// import Avatar from '@material-ui/core/Avatar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import { red } from '@material-ui/core/colors';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';

const AllSets = ({ setLegoId }) => {
    const [legos, setLegos] = useState('');
    const [reviews, setReviews] =useState('')

	useEffect(() => {
		const url = 'https://pure-sierra-61007.herokuapp.com/legos';
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				let legos = res
                setLegos(legos)
            })
            .catch((error) => console.log(error))
    }, []);
    
    const reviewUrl = 'https://pure-sierra-61007.herokuapp.com/reviews';
    fetch(reviewUrl)
        .then((res) => res.json())
        .then((res) => {
            let reviews = res
            setReviews(reviews)
        })
        .catch((error) => console.log(error))

	if (!legos) {
		return <CircularProgress />;
    }
    
    const handleClick = (index) => {
        let existingLegos = JSON.parse(localStorage.getItem('legos'))
        if(existingLegos == null) existingLegos = []
        existingLegos.push(legos[index])
        localStorage.setItem('legos', JSON.stringify(existingLegos))
	}
	
	const handleClick2 = (index) => {
		let existingOwnedLegos = JSON.parse(localStorage.getItem('ownedLegos'))
		if(existingOwnedLegos == null) existingOwnedLegos = []
		existingOwnedLegos.push(legos[index])
		localStorage.setItem('ownedLegos', JSON.stringify(existingOwnedLegos))
	}

	return (
		<>
			<h2>All Sets</h2>
			<Grid container spacing={3} style={{ backgroundColor: 'black' }}>
				{legos.map((lego, index) => (
					<Grid item xs={4}>
						<Card>
							<div key={index}>
								<h2>{lego.name}</h2>
								<p>
									Set Number: {lego.set_number} | Pieces: {lego.piece_count} |
									Source: {lego.source} | Release Year: {lego.release_year} |
									Minifigures: {lego.minifigures}
								</p>
								<CardMedia
									style={{ height: 0, paddingTop: '56%' }}
									image={lego.image_url}
									title='legos'
								/>

								<p>
									<Link
										style={{ textDecoration: 'none' }}
										to={`/new_review/${lego.id}`}
										key={lego.id}>
										<Button
											onClick={(event) => setLegoId(lego.id)}
											variant='contained'
											color='primary'
											startIcon={<AddIcon />}
											>
											Review
										</Button>
									</Link>
									<Button
										style={{ marginLeft: '10px', marginRight: '10px' }}
										onClick={() => handleClick(index)}
										variant='contained'
										color='primary'
										startIcon={<AddShoppingCartIcon />}>
										Wishlist
									</Button>
									<Button
										onClick={() => handleClick2(index)}
										variant='contained'
										color='primary'
										startIcon={<LoyaltyIcon />}>
										Owned
									</Button>
									<h4>Reviews:</h4>
									{lego.reviews.map((review) => (
										<div>
											<p style={{ paddingLeft: '10px', paddingRight: '10px' }}>
												{review.title} - {review.body}
											</p>
										</div>
									))}
								</p>
							</div>
						</Card>
					</Grid>
				))}
			</Grid>
		</>
	);
};

export default AllSets;



        // <IconButton color='primary' aria-label='add to shopping cart'>
		// 			<AddShoppingCartIcon />
		// 		</IconButton>;