import axios from "axios";
import { useState, useEffect } from "react"
import { useAuth } from "../../Context/authContext";
import { saveTypeConsumer } from "../../Firebase/Firebase-init";
import { useNavigate } from 'react-router-dom';
import idolo_del_ambiente from '../../assets/images/idolo_del_ambiente.png'
import responsable_del_ambiente from '../../assets/images/responsable_del_ambiente.png'
import traidor_del_ambiente from '../../assets/images/traidor_del_ambiente.png'
import '../../styles/Poll.css'

export default function Poll() {
  const { user } = useAuth();

  const [countQuestion, setCountQuestion] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState();
  const [countGoodAction, setCountGoodAction] = useState(0);
  const [totalCuestion, setTotalCuestion] = useState(0);
  const [result, setResult] = useState(false);

  useEffect(() => {   
    axios({ url: `http://localhost:3000/questions/${countQuestion}` })
      .then((response) => {
        setCurrentQuestion(response.data);

        console.log(response.data);

      }).catch((error) => {
        console.log(error);
      })
  }, [countQuestion]);

  useEffect(() => {
    axios({ url: `http://localhost:3000/questions/` })
      .then((response) => {
        setTotalCuestion(response.data.length);
        console.log(response.data.length);

        console.log(response.data);

      }).catch((error) => {
        console.log(error);
      })
  }, []);

  const questionAnswered = (answer) => {
    setCountQuestion(countQuestion + 1)
    if (countQuestion === totalCuestion) {
      setResult(true);
      let typeFirebase;
      if(countGoodAction >= 8){
        typeFirebase =  "Eres un Idolo del Ambiente";
      }else if(countGoodAction > 4 && countGoodAction < 8){
        typeFirebase =  "Responsable del Ambiente";
      }else if(countGoodAction <= 4){
        typeFirebase = "Traidor del Ambiente";
      }
      saveTypeConsumer(user.uid,typeFirebase);
    }
    if (answer) {
      setCountGoodAction(countGoodAction + 1)
    }
  }

  const navigate = useNavigate();
  // función cambio de ruta a registro
  const handleChangeUrl = () => {
    return navigate('/profile', { replace: true });
  };

  const Results = ({resPhoto}) => (
    <>
      <h1 className="Resuls">
        {
          countGoodAction >= 8 ?
            "Eres un Idolo del Ambiente" : null
        }
        {
          countGoodAction > 4 && countGoodAction < 8 ?
            "Responsable del Ambiente" : null
        }
        {
          countGoodAction <= 4 ?
            "Traidor del Ambiente" : null
        }
      </h1>
      <img className='general-nav-img' src={resPhoto} alt='hoja'/>
      <button onClick={handleChangeUrl}>Ir a Perfil</button>
    </>
  )

  let resPhoto;
  if(countGoodAction >= 8){
    resPhoto = idolo_del_ambiente
  }else if(countGoodAction > 4 && countGoodAction < 8){
    resPhoto = responsable_del_ambiente
  }else if(countGoodAction <= 4){
    resPhoto = traidor_del_ambiente
  }

  return (

    <div className="allQuestions">{result ? <Results resPhoto={resPhoto}/> :

      currentQuestion ?
        (
          <>
            {/* <span>Contador de buenas acciones {countGoodAction}</span> */}
            <div className="questions">
            <p>{currentQuestion.question}</p>
            </div>
            <div className="buttons__answers">
            <button className="buttons__answers--si" onClick={() => questionAnswered(true)}>Si</button>                      
            <button className="buttons__answers--no" onClick={() => questionAnswered(false)}>No</button>
            </div>
          </>
        )
        : (
          <h1>Cargando</h1>
        )
    }

    </div>

  )
}
