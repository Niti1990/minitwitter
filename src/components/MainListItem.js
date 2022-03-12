import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const Postdetail = ({ id, text }) => {
	return (
		<Card className='mb-5'>
			<Card.Body>
				<Card.Title>Anonymous</Card.Title>
				<Card.Text>{text}</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default Postdetail;
