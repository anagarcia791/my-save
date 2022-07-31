import NavBar from '../Shared/NavBar'
import Banner from './Banner'
import greeni from '../../assets/images/greeni.png';
import { useNavigate } from 'react-router-dom';
import '../../styles/Home.css'
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
      <div className='conten'>
      <button className='poll' onClick={handleChangeUrl}>¿Quieres saber que tipo de consumidor eres?</button>
      <img className='form__logo' src={ greeni } alt='greeni-logo'/>  
      </div>
    </>
  )
}
