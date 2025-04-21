import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

//interpolamos variables entre llaves en el return
const nombre= "maxi pontin";

//interpolamos arreglos
const arr= ["maxi", "pontin", 22];

function App() {
 
  return (
    <>
     <h1>
      Hola soy {nombre}, mi username es: {arr}
     </h1>
    </>
  )
}

export default App
