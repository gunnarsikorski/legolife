import React, { useState, useEffect } from 'react';
// import localStorage from 'local-storage';
// import clsx from 'clsx';
// import Card from '@material-ui/core/Card';
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

const AllSets = () => {
    const [legos, setLegos] = useState('');
    const [tempLegos, setTempLegos] = useState('')
    // localStorage.setItem('legos', [])

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
    
    const handleClick = (index) => {
        let existingLegos = JSON.parse(localStorage.getItem('legos'))
        if(existingLegos == null) existingLegos =[]
        existingLegos.push(legos[index])
        localStorage.setItem('legos', JSON.stringify(existingLegos))
    
    }

	return (
		<>
			{legos.map((lego, index) => (
				<div key={index}>
					<h2>{lego.name}</h2>
					<p>
						Set Number: {lego.set_number} | Pieces: {lego.piece_count} | Source:{' '}
						{lego.source} | Release Year: {lego.release_year} | Includes:{' '}
						{lego.minifigures}
					</p>
					<img src={lego.image_url} alt='lego' />
					<button onClick={() => (handleClick(index))}>Add to Wishlist</button>
				</div>
			))}
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