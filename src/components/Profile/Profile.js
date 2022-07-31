import { useAuth } from "../../Context/authContext";
import NavBar from "../Shared/NavBar";

export default function Profile() {
  const { user } = useAuth();

  return (
    <>
    <NavBar/>
    <div className="infoUsuario">
      <h1>Tu Correo: {user.email}</h1>
      <h1>Tipo de consumidor: </h1>     
            
    </div>
    </>
  )
}
