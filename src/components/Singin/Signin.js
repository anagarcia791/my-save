// Imports
import { useState, useEffect } from 'react';
import { useAuth } from '../../Context/authContext';
import { useNavigate } from 'react-router-dom';
import greeni from '../../assets/images/greeni.png';

// vista sigin
export default function Signin() {

  const {signup} = useAuth();

  // declaracion de navigate para cambio de ruta
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
  };

  // funcion para registrar usuario
  const handleSignIn = async(e)=>{
    e.preventDefault();
    try{
      await signup(user.email, user.password)
      navigate('/home', { replace: true });
    }catch(error){
      if (error.code === 'auth/weak-password'){
        setError('La contraseña no tiene 6 caracteres')
      }else{
        setError('error al registrar usuario');
      }
    }
  }

  // hook para cambio en mensaje de error
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError('');
      }, 1500);
    }
  }, [error]);

  // funcion cambio de ruta a login
  const handleChangeUrl = () => {
    return navigate('/login', { replace: true });
  };

  return (
    <>
      <form className='form' onSubmit={handleSignIn}>
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
        
        <button type='submit' className='form__btn-main'>Registrarte</button>

        {error && <span className='form__error-msg'>{error}</span>}

        <hr/>
      </form>
      <section className = 'log-sig-load'>
        <p>Si ya tienes cuenta</p>
        <button type='button' className='form__btn-secondary' onClick={handleChangeUrl}>Inicia sesión</button>
      </section>
    </>
  )
}
