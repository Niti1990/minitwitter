import { Route, Routes } from 'react-router-dom';
import './App.css';
import Searchpost from './components/Main';
import Post from './components//Post';
import Sidebar from './components/Sidebar';
import { Container, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//import SidebarOption from './components/SidebarOptions/SidebarOption';

function App() {
	return (
		<Container>
			<Row>
				<Col>
					<Sidebar />
				</Col>
				<Col xs={6}>
					<Routes>
						<Route path='/' element={<Searchpost />}></Route>
						<Route path='/message/:id' element={<Post />}></Route>
						{/* //<Route path='/' element={<SidebarOption />}></Route> */}

						{/* <Route path="details/:id" element={<Details />} /> */}
					</Routes>
				</Col>
				<Col>whatevers here</Col>
			</Row>
		</Container>
	);
}

export default App;
