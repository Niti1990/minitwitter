import React, { useState, useEffect } from 'react';
import Postdetail from './MainListItem';
import { Card } from 'react-bootstrap';

import Sidebar from './Sidebar';
//const { REACT_APP_TMDB_API_KEY } = process.env;
const BASE_URL = 'https://mini-twitter-server.herokuapp.com/';
//const INITIAL_POSTS_URL = `${BASE_URL}discover/movie?sort=popularity.desc&api_key=${REACT_APP_TMDB_API_KEY}&page=1`;
const SEARCH = `${BASE_URL}&query=`;

function Searchpost() {
	const [tweets, setTweets] = useState([]);
	const [loading, setLoading] = useState(false);
	const [findPost, setFindPost] = useState('');

	useEffect(() => {
		getTweets();
	}, []);

	async function getTweets() {
		setLoading(true);
		try {
			const res = await fetch(`${BASE_URL}messages`);

			if (res.ok) {
				const data = await res.json();
				console.log('data', data);

				setTweets(data); //id is there
				setLoading(false);
			}
		} catch (error) {
			console.error("Fetch didn't work wout");
		}
	}
	const handleSubmit = (event) => {
		event.preventDefault();
		const searchValue = event.target[0].value;

		const newTweets = tweets.filter((tweet) => {
			const currentTweet = tweet.text.toLowerCase();
			console.log(tweet);

			return currentTweet.includes(searchValue.toLowerCase());
		});
		console.log(newTweets);
		setTweets(newTweets);
	};
	return (
		<div>
			{/* <Sidebar /> */}
			<form onSubmit={handleSubmit}>
				<input
					className='input-group mb-5'
					onChange={(event) => setFindPost(event.target.value)}
					type='search'
					placeholder='Search post...'
					value={findPost}
				/>

				{tweets.length ? (
					<ul>
						{tweets.map((tweet) => (
							<Postdetail key={tweet.id} {...tweet} />
						))}
					</ul>
				) : (
					<div>Sorry, no Post found!</div>
				)}
			</form>
		</div>
	);
}
export default Searchpost;
