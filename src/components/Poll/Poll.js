import axios from "axios";
import { useState, useEffect } from "react"
import '../../styles/Poll.css'

export default function Poll() {
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
    if (countQuestion == totalCuestion) {
      setResult(true);
    }
    if (answer) {
      setCountGoodAction(countGoodAction + 1)
    }
  }

  const Results = () => (    
    <>
      <h1 className="Resuls">
        {
          countGoodAction > 8 ?
            "Eres un Idolo del Ambiente" : null
        }
        {
          countGoodAction > 4 && countGoodAction < 8 ?
            "Responsable del Ambiente" : null
        }
        {
          countGoodAction < 4 ?
            "Traidor del Ambiente" : null
        }
      </h1>
    </>
  )

  return (

    <div className="allQuestions">{result ? <Results /> :

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