import NavBar from '../Shared/NavBar'
import Banner from './Banner'
import { useNavigate } from 'react-router-dom';

export default function Home() {

  const navigate = useNavigate();
  // función cambio de ruta a registro
  const handleChangeUrl = () => {
    return navigate('/poll', { replace: true });
  };

  return (
    <>
      <NavBar/>
      <Banner/>
      <button onClick={handleChangeUrl}>Poll</button>
    </>
  )
}
