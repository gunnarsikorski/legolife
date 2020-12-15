import React, { useEffect, useState } from 'react';
import { CircularProgress } from '@material-ui/core';

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
			<div>
				{JSON.parse(localStorage.getItem('legos')).map((lego, index) => (
					<div key={index}>
						<h2>{lego.name}</h2>
						<button onClick={() => (handleClick(index))}>Remove</button>
					</div>
				))}
			</div>
		);
};

export default Wishlist;