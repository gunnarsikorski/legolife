import React, { useState, useEffect } from 'react';
import localStorage from 'local-storage';

const AllSets = () => {
	const [legos, setLegos] = useState('');

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

	if (!legos) {
		return <p>Loading...</p>;
    }
    
    const handleClick = () => {
        localStorage.setItem('legos', JSON.stringify(legos));
    }

	return (
		<div>
			{legos.map((lego) => (
				<div>
					<h2>{lego.name}</h2>
                    <p>Set Number: {lego.set_number} | Pieces: {lego.piece_count} | Source: {lego.source} | Release Year: {lego.release_year} | Includes: {lego.minifigures}</p>
                    <img src={lego.image_url} alt='lego'/>
                    <button onClick={handleClick}>Add to Wishlist</button>
				</div>
			))}
		</div>
	);
};

export default AllSets;