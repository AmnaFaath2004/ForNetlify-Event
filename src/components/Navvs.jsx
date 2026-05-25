import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsBagHeart } from 'react-icons/bs';
import "./Navvs.css"
import { Link } from 'react-router-dom';


function Naavs({cart}){
    return(
        <>
        <Navbar expand="lg"  data-bs-theme="dark" style={{background:"#1f2937"}}>
        <Container>
          <Navbar.Brand href="#home">RoyalVenue Management</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link as={Link} to='/events'>Service</Nav.Link>
            <Nav.Link as={Link} to='/Booking' className="position-relative">Booking  <BsBagHeart  size={22}/>
            <span className='booking'>{cart}</span>
            </Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
        </>
    )
}
export default Naavs