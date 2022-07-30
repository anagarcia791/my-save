// Imports
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import greeni from '../../assets/images/greeni.png';

// vista login
export default function Login() {

  // navigate para cambio de ruta
  const navigate = useNavigate();

  // estructura de hook para mostrar error
  const [error, setError] = useState('');
  
  // estructura de hook para cambio en inputs de form
  const [user, setUser]= useState({
    email:'',
    password:'',
  });

  // funcion para captura de cambio en inputs
  const handleChange = ({target: {name, value}}) => {
    setUser({...user, [name]:value})
  }

  // funcion para iniciar sesión
  const handleLogin = (e)=>{
    e.preventDefault();
    console.log(user);
    navigate('/home', { replace: true });
  }

  // hook para cambio en mensaje de error
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError('');
      }, 1500);
    }
  }, [error]);

  
  // función cambio de ruta a registro
  const handleChangeUrl = () => {
    return navigate('/signin', { replace: true });
  };

  return (
    <>
      <form className='form' onSubmit={handleLogin}>
        <img className='form__logo' src={ greeni } alt='greeni-logo'/>

        <input
          type='text'
          name='email'
          placeholder='ejemplo@email.com'
          autoComplete='off'
          onChange={handleChange}
        ></input>

        <input
          type='password'
          name='password'
          placeholder='Contraseña'
          onChange={handleChange}
        ></input>
        
        <button type='submit' className='form__btn-main'>Iniciar sesión</button>

        {error && <span className='form__error-msg'>{error}</span>}

        <hr/>
      </form>
      <section className = 'log-sig-load'>
        <p>¿No tienes cuenta?</p>
        <button type='button' className='form__btn-secondary' onClick={handleChangeUrl}>Regístrate</button>
      </section>
    </>
  );
}
