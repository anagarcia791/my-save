import hoja from '../../assets/images/hoja.png';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { useAuth } from '../../Context/authContext'
import '../../styles/NavBar.css';

export default function NavBar() {
  const {logout} =useAuth();
  const handleLogout = async() => {
    await logout();    
  }
  return (
    <>
      <Navbar expand='sm' className='general-nav'>
        <img className='general-nav-img' src={ hoja } alt='hoja'/>
        <Navbar.Toggle
          aria-controls='basic-navbar-nav'
          className='general-nav-toggle'
        />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='general-nav-dir'>
            <Link to='/home'>Home</Link>
            <Link to='/profile'>Perfil</Link>
            <button type='button' onClick={handleLogout}>Salir</button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}
