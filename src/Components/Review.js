import React, { useState } from 'react';
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save'

const Review = ({ match }) => {
    const [redirect, setRedirect] = useState(false)
    const [reviewData, setReviewData] = useState({title: '', body: '', lego: match.params.id})
    // const [review, setReview] = useState('')

    // const reviewUrl = 'http://localhost:8000/reviews';
	// 	fetch(reviewUrl)
	// 		.then((res) => res.json())
	// 		.then((res) => {
	// 			let review = res;
	// 			setReview(review);
	// 		})
	// 		.catch((error) => console.log(error));

    const handleChange = (event) => {
        event.persist()
        setReviewData({...reviewData, [event.target.id]: event.target.value})
    }

    const handleCreate = (event) => {
        event.preventDefault()
        // const data = {
        //     title: event.target.title.value,
        //     body: event.target.body.value,
        //     lego: match.params.id
        // }
        // const reviewData = new FormData()
        // reviewData.append()
        // console.log(reviewData);
        const url = `https://pure-sierra-61007.herokuapp.com/reviews/`;
        axios
            .post(url, reviewData)
            .then((res) => setRedirect(true))

    }

    if (redirect) {
	    return <Redirect to='/sets' />;
	}
   
    return (
			<div>
				<h2>New Review:</h2>
				<Grid container spacing={6} justify='center'>
					<form noValidate autoComplete='off' onSubmit={handleCreate} id='reviewForm'>
					    <Grid item xs={9}>
							<TextField onChange={handleChange} value={reviewData.title} style={{marginTop: '100px', marginBottom: '30px'}}id='title' label='Review Title' name='title' />
						
					    </Grid>
				
					    <Grid item xs={12}>
						
							<TextField
                                onChange={handleChange}
                                value={reviewData.body}
                                style={{marginBottom: '30px'}}
                                id='body'
                                name='body'
								label='Write review here'
								variant='outlined'
								fullWidth='true'
								multiline='true'
                                />
					    </Grid>
				
                        <Button
                            type='submit'
                            variant='contained'
                            color='primary'
                            size='small'
                            startIcon={<SaveIcon />}>
                            Save
                        </Button>
                    </form>
                </Grid>
			</div>
		);
};

export default Review;