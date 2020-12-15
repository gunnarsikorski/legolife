import React from 'react';
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid';

const Review = () => {
   
    return (
			<div>
				<h2>New Review:</h2>
				<Grid container spacing={6} justify='center'>
					<Grid item xs={6}>
						<form noValidate autoComplete='off'>
							<TextField id='standard-basic' label='Review Title' />
						</form>
					</Grid>
				</Grid>
				<Grid container spacing={3} justify='center'>
					<Grid item xs={9}>
						<form noValidate autoComplete='off'>
							<TextField
								id='outlined-basic'
								label='Write review here'
								variant='outlined'
								fullWidth='true'
								multiline='true'
							/>
						</form>
					</Grid>
				</Grid>
			</div>
		);
};

export default Review;