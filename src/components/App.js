// Imports
import '../styles/LogSig.css';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import greeni from '../assets/images/greeni.png';

// entrada App
export default function App() {

  // navigate para cambio de ruta
  const navigate = useNavigate();

  // función cambio de ruta a login
  const handleChangeUrl = () => {
    return navigate('/login', { replace: true });
  };

  return (
    <div className='app'>
      <img className='logo' src={ greeni } alt='greeni-logo'/>
      <p>¿Quieres conocer si eres un consumidor responsable? </p>
      <button type='button' onClick={handleChangeUrl}>Continuar</button>
    </div>
  )
}
