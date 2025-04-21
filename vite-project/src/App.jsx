import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  //hooks para crear estado use state: devuelve una variable que tiene el valor y una funcion que cambia el valor de esa variable (le dice a react que tiene que renderizarse)
  const [valorInput, setValorInput] = useState(); // el usestate entre parentesis tiene el valor inicial de la variable creada, pueden ser numeros, letras, null, etc.

  //usamos la funcion set de la variable para poder visualizar el cambio en pantalla
  const onChange = (e) => {
    const valor = e.target.value;//capturamos el valor del evento
    setValorInput(valor);//lo visualizamos en pantalla
  }
  
  return (
    <>
      <input value ={valorInput} onChange={onChange}/> 
      <p>{valorInput}</p>
    </>
  )
}

export default App
