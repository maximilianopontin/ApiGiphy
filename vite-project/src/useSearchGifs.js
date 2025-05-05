import { useState } from 'react'


function useSearchGifs() { //hooks para crear estado use state: devuelve una variable que tiene el valor y una funcion que cambia el valor de esa variable (le dice a react que tiene que renderizarse)

    const [valorInput, setValorInput] = useState(''); // el usestate entre parentesis tiene el valor inicial de la variable creada, pueden ser numeros, letras, null, etc.
    const [gifs, setGifs] = useState([]);
    
    //usamos la funcion set de la variable para poder visualizar el cambio en pantalla
    const onChange = (e) => {
        const valor = e.target.value;//capturamos el valor del evento
        setValorInput(valor);//lo visualizamos en pantalla
    }

    const getGifs = async (query) => {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=nCILuLk3oSxOD3ohyBW4hVhhqnc4cjbV&q=${query}`;
        const response = await fetch(url);//devuelve promesa por eso usamos await para esperar la peticion a la url
        const data = await response.json();
        return data.data;
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        const gifs = await getGifs(valorInput);
        setGifs(gifs);
        console.log(gifs)
    }


    return {
        valorInput,
        gifs,
        onSubmit,
        onChange
    }

}

export default useSearchGifs;