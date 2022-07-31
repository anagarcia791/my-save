export const questionPetition = () => {
  console.log('peticón');

  return fetch('http://localhost:3000/questions', {
    method: 'GET',
  }).then((response) => {
    if (!response.ok) {
      throw Error('Error al traer preguntas');
    }
    return response.json();
  });
};