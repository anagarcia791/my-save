import { useEffect, useState } from "react"
import { useAuth } from "../../Context/authContext";
import NavBar from "../Shared/NavBar";
import {  getTypes, getAllTypes } from "../../Firebase/Firebase-init";
import idolo_del_ambiente from '../../assets/images/idolo_del_ambiente.png'
import responsable_del_ambiente from '../../assets/images/responsable_del_ambiente.png'
import traidor_del_ambiente from '../../assets/images/traidor_del_ambiente.png'

export default function Profile() {

  const [type, setType] = useState('');

  const { user } = useAuth();

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
  }

  return (
    <>
    <NavBar/>
    <div className="infoUsuario">
      <h1>Tu Correo: {user.email}</h1>
      <h1>Tipo de consumidor: {type} </h1>   
      <img src={photo} alt='idolotraidor'/>   
    </div>
    </>
  )
}
