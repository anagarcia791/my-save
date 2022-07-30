// Imports
import '../styles/App.css';
import { useNavigate } from 'react-router-dom';

// entrada App
export default function App() {

  // navigate para cambio de ruta
  const navigate = useNavigate();

  // función cambio de ruta a login
  const handleChangeUrl = () => {
    return navigate('/login', { replace: true });
  };

  return (
    <div>
      <p>INICIO APLICACION</p>
      <button type='button' onClick={handleChangeUrl}>Continuar</button>
    </div>
  )
}
