import { useEffect, useState } from "react"
import { useAuth } from "../../Context/authContext";
import NavBar from "../Shared/NavBar";
import {  getTypes, getAllTypes } from "../../Firebase/Firebase-init";
import idolo_del_ambiente from '../../assets/images/idolo_del_ambiente.png'
import responsable_del_ambiente from '../../assets/images/responsable_del_ambiente.png'
import traidor_del_ambiente from '../../assets/images/traidor_del_ambiente.png'
import greeni from '../../assets/images/greeni.png'
import { useNavigate } from 'react-router-dom';
import '../../styles/profile.css'

export default function Profile() {

  const [type, setType] = useState('');

  const { user } = useAuth();
  const navigate = useNavigate();
  const handleChangeUrl = () => {
    return navigate('/poll', { replace: true });
  };

  useEffect(() => {   
    // eslint-disable-next-line no-unused-vars
    const types = getTypes();
    getAllTypes((types)=>{
      types.forEach((doc)=>{
        if(doc.data().uid === user.uid){
          setType(doc.data().type);
        }
      });
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let photo;
  if(type === 'Idolo del Ambiente'){
    photo = idolo_del_ambiente;
  }else if(type === 'Responsable del Ambiente'){
    photo = responsable_del_ambiente;
  }else if(type === 'Traidor del Ambiente'){
    photo = traidor_del_ambiente;
  }else {
    photo = greeni
  }

  const ConsumerType = ({resPhoto}) => (
    type === '' 
      ? <button className="poll" onClick={handleChangeUrl}>Descrubre que tipo de consumidor eres</button>
      : <h1 className="tipo__consumer">Tipo de consumidor:<br/> {type} </h1>

  )


  return (
    <>
    <NavBar/>
    <div className="infoUsuario">
      <h1 className="info__user">Tu correo: {user.email}</h1>
      <ConsumerType/>   
      <img className="img__result" src={photo} alt='idolotraidor'/>   
    </div>
    </>
  )
}
