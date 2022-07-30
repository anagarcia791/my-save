// import greeni from '../../assets/images/greeni.png';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { useAuth } from '../../Context/authContext'

export default function NavBar() {
  const {logout} =useAuth();
  const handleLogout = async() => {
    await logout();    
  }
  return (
    // <>hola</>
    <>
      <Navbar expand='sm' className='general-nav'>
        <Navbar.Toggle
          aria-controls='basic-navbar-nav'
          className='general-nav-toggle'
        />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='general-nav-dir'>
            <Link to='/profile'>Perfil</Link>
            <button type='button' onClick={handleLogout}>Salir</button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}
