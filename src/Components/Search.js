import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SearchResults from './SearchResults'

const Search = () => {
	const [sets, setSets] = useState('');
	const [search, setSearch] = useState('');

	function findSets(searchString) {
		const url = `https://pure-sierra-61007.herokuapp.com/legos/?search=${search}`;

		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				setSets(res);
				setSearch('');
			})
			.catch((error) => console.log(error));
	}

	function handleChange(event) {
		setSearch(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
		findSets(search);
	}

	return (
		<>
			<h2>Search Sets</h2>

			<form
				onSubmit={handleSubmit}
				noValidate
				autoComplete='off'
				id='searchForm'>
				<TextField
					style={{ marginTop: '40px', marginBottom: '30px' }}
					onChange={handleChange}
					id='title'
					label='Search anything...'
					name='title'
				/>
				<Button
					style={{
						marginTop: '58px',
						marginBottom: '30px',
						marginLeft: '15px',
					}}
					type='submit'
					variant='contained'
					color='primary'
					size='small'>
					Search
				</Button>
			</form>
			<div>
				{sets !== null && sets.length > 0 && (
					<SearchResults sets={sets} />
				)}
				{sets === null && (
					<p style={{ marginTop: '1.5rem', color: 'red' }}>
						Sorry, try another query!
					</p>
				)}
			</div>
		</>
	);
};

export default Search;
