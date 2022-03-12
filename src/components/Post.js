import { Link } from 'react-router-dom';

const Post = ({ id, title, discription}) => {
	
	return (
		<div>
			
				<img
					style={{ width: '100px' }}
					src={poster_path ? IMAGES + poster_path : IMAGES + backdrop_path}
					alt={title}
				/>
				{title}
                {discription}
			
		</div>
	);
};

export default Post;
