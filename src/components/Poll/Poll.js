//import { useState } from "react"
import { questionPetition } from "../../Api/PollPetition"

export default function Poll() {
  //const [question, setQuestion]= useState

  const allQuestions = (e) => {
    e.eventPreventDefault()
    questionPetition()
      .then((res)=>{
        console.log(res)
      })
      .catch((err)=>{
        console.log(err)
      })
  }


  return (
    <form>
      <div>
        <h1>PREGUNTA</h1>
        <button>Si</button>
        <button>No</button>
        <button onClick={allQuestions}>Siguiente</button>
      </div>
    </form>
  )
}