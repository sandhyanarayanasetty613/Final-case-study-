import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './css/Navbar.css'
// import {Navbar} from 'react-responsive-navbar-overlay';

const NavbarComponent = ()=> {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
        
        <Navbar.Brand  ><Link to="/home" className='btn btn-light '> TOPJOBS  <i class="bi bi-briefcase"></i>
                             </Link></Navbar.Brand> 
          
          <Nav className="nav">
          <Link to="/home" >
            <button className='btn btn-primary'>Home</button>
            </Link>
            <Link to="/Contact">
            <button className='btn btn-primary'>Contact US</button>
            </Link>
            <Link to="/Jobs" >
            <button className='btn btn-primary'>Jobs</button>
            </Link>
            
          </Nav>
        </Container>
      </Navbar>
     
    </>
  );
}

export default NavbarComponent;