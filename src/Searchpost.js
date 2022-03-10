import React, { useState, useEffect } from 'react';
import Postdetail from './Postdetail';
const { TMDB_API_KEY } = process.env;
const BASE_URL = 'https://api.themoviedb.org/3/';
const POPULAR = `${BASE_URL}discover/movie?sort=popularity.desc&api_key=${TMDB_API_KEY}&page=1`;
const SEARCH = `${BASE_URL}search/movie?&api_key=${TMDB_API_KEY}&query=`;

function Post() {
	const [post, setPost] = useState([]);
	const [searchPost, setSearchPost] = useState('');

	useEffect(() => {
		getPost(POPULAR);
	}, []);

	useEffect(() => {
		if (searchPost.length >= 4) {
			getPost(SEARCH + searchPost);
		} else {
			getPost(POPULAR);
		}
	}, [searchPost]);

	async function getPost(QUERY) {
		const res = await fetch(QUERY);
		const data = await res.json();

		setPost(data.results);
	}

	return (
		<div>
			<form onSubmit={(event) => event.preventDefault()}>
				<input
					onChange={(event) => setSearchPost(event.target.value)}
					type='search'
					placeholder='Search movies...'
					value={searchPost}
				/>
				{post.length > 0 ? (
					<ul>
						{post.map((item) => (
							<Postdetail key={item.id} {...item} />
						))}
					</ul>
				) : (
					<div>Sorry, no Post found!</div>
				)}
			</form>
		</div>
	);
}
export default Post;
