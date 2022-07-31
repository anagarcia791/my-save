import { useEffect, useState } from "react"
import { useAuth } from "../../Context/authContext";
import NavBar from "../Shared/NavBar";
import {  getTypes, getAllTypes } from "../../Firebase/Firebase-init";

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

  return (
    <>
    <NavBar/>
    <div className="infoUsuario">
      <h1>Tu Correo: {user.email}</h1>
      <h1>Tipo de consumidor: {type} </h1>      
    </div>
    </>
  )
}
