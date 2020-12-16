import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
// import localStorage from 'local-storage';
// import clsx from 'clsx';
import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader'
// import CardMedia from '@material-ui/core/CardMedia';
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
				<Grid container spacing={3}>
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
								<img src={lego.image_url} alt='lego' />
								<p>
									{lego.reviews.map((review) => (
										<div>
											<h4>Reviews:</h4>
											<p>
												{review.title} - {review.body}
											</p>
										</div>
									))}
									<Link to={`/new_review/${lego.id}`} key={lego.id}>
										<button onClick={(event) => setLegoId(lego.id)}>Add Review</button>
									</Link>
									<button onClick={() => handleClick(index)}>
										Add to Wishlist
									</button>
									<button onClick={() => handleClick2(index)}>
										Add to Owned
									</button>
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



                //     <Card>
                //     <CardHeader 
                //         title={lego.name} 
                //         subheader={lego.piece_count}
                //     />
                //     <CardMedia
                //         style={{ height: 0, paddingTop: '56.25%'}}
                //         image={lego.image_url}
                //         title='lego'
                //     />
					
                // </Card>
                
                // {
				// 					reviews.map((review) => (
				// 						<p>
				// 							Reviews: {review.title} - {review.body}
				// 						</p>
				// 					));
				// 				}