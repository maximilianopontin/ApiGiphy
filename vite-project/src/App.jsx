import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  //hooks para crear estado use state: devuelve una variable que tiene el valor y una funcion que cambia el valor de esa variable (le dice a react que tiene que renderizarse)
  const [num, setNum] = useState(1); // el usestate entre parentesis tiene el valor inicial de la variable creada, pueden ser numeros, letras, null, etc.

  //usamos la funcion set de la variable para poder visualizar el cambio en pantalla
  const sumar = () => {
    setNum(num + 1);
  }
  const restar = () => {
    setNum(num - 1);
  }
  return (
    <>
      <button onClick={sumar}> 
        Sumar 1
      </button>
      <button onClick= {restar}>
        Restar 1
      </button>
      <p>{num}</p>
    </>
  )
}

export default App
