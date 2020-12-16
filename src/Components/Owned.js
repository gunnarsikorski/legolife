import React, { useEffect, useState } from 'react';
import { CircularProgress } from '@material-ui/core';

const Owned = () => {
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
		return <CircularProgress />;
	}

	const handleClick = (index) => {
		let existingOwnedLegos = JSON.parse(localStorage.getItem('ownedLegos'));
		existingOwnedLegos.splice(index, 1);
		localStorage.setItem('ownedLegos', JSON.stringify(existingOwnedLegos));
		return legos[index].name;
	};

	return (
		<div>
            <h1>Owned</h1>
			{JSON.parse(localStorage.getItem('ownedLegos')).map((lego, index) => (
				<div key={index}>
					<h2>{lego.name}</h2>
                    <img src={lego.image_url} alt="lego"/>
					<button onClick={() => handleClick(index)}>Remove</button>
				</div>
			))}
		</div>
	);
};

export default Owned;
