import React, { useState } from 'react';
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save'

const Review = () => {
    const [redirect, setRedirect] = useState(false)
    const [review, setReview] = useState('')

    const reviewUrl = 'https://pure-sierra-61007.herokuapp.com/reviews';
		fetch(reviewUrl)
			.then((res) => res.json())
			.then((res) => {
				let review = res;
				setReview(review);
			})
			.catch((error) => console.log(error));

    const handleCreate = (event) => {
        event.preventDefault()

        const data = {
            title: event.target.title.value,
            body: event.target.title.value,
        }

        const url = `https://pure-sierra-61007.herokuapp.com/reviews/${review.id}`
        axios
            .post(url, data)
            .then((res) => setRedirect(true))
    }

    if (redirect) {
	    return <Redirect to='/sets' />;
	}
   
    return (
			<div>
				<h2>New Review:</h2>
				<Grid container spacing={6} justify='center'>
					<form noValidate autoComplete='off' onSubmit={handleCreate}>
					    <Grid item xs={9}>
							<TextField id='title' label='Review Title' />
						
					    </Grid>
				
					    <Grid item xs={12}>
						
							<TextField
								id='body'
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