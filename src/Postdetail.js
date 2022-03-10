import { Link } from 'react-router-dom';

const Postdetail = ({ id, title, poster_path, backdrop_path }) => {
	const IMAGES = `https://image.tmdb.org/t/p/w1280`;
	return (
		<li>
			<Link  to={`/details/${id}`} >
				<img
					style={{ width: '100px' }}
					src={poster_path ? IMAGES + poster_path : IMAGES + backdrop_path}
					alt={title}
				/>
				{title}
			</Link>
		</li>
	);
};

export default Postdetail;
