import { useState } from "react";

function Counter() {

    const [counter, setCounter] = useState(0);// creamos estado (varianble counter) y funcion para cambiar ese estado
    //creamoss funcion onClick para crear contador
    const incrementar = () => {
        setCounter((prevCounter)=> prevCounter + 1); // callback que recibe el valor anterior (prevCounter) y retorna el nuevo valor.
    }

    return (
        <>
<p>Contador={counter}</p>
<button onClick={incrementar}>Sumar 1</button>

        </>
    )
}
export default Counter;