import React, { useEffect, useState } from 'react';
import { CircularProgress } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';


const Wishlist = () => {
     const [legos, setLegos] = useState('');

			useEffect(() => {
				const url = 'https://pure-sierra-61007.herokuapp.com/legos';
				fetch(url)
					.then((res) => res.json())
					.then((res) => {
						let legos = res;
						setLegos(legos);
					})
					.catch((error) => console.log(error));
			}, []);

			if (!legos) {
				return <CircularProgress/>;
			}

    const handleClick = (index) => {
			let existingLegos = JSON.parse(localStorage.getItem('legos'));
			existingLegos.splice(index, 1);
            localStorage.setItem('legos', JSON.stringify(existingLegos));
            return legos[index].name
        };
        
    return (
			<>
				<h1>Wishlist</h1>
				<Grid container spacing={3} style={{ backgroundColor: 'black' }}>
					{JSON.parse(localStorage.getItem('legos')).map((lego, index) => (
						<Grid item xs={4}>
							<Card>
								<div key={index}>
									<h2>{lego.name}</h2>
									<img src={lego.image_url} alt='lego' />
									<button onClick={() => handleClick(index)}>Remove</button>
								</div>
							</Card>
						</Grid>
					))}
				</Grid>
			</>
		);
};

export default Wishlist;