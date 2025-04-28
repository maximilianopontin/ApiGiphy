import Gif from "./Gif";



function GridGifs({gifs}) { //pasamos como props los gifs (del componente padre app) que vamos a usar en este componente

    return (
        <>
            {
                gifs.map(gif => (//mediante map recorremos el arreglo de gifs, usamos un callback para gif y en imagenes buscamos la original y luego la url 
                    <Gif key={gif.id} gif={gif}/>
                ))
            }
        </>
    )
}

export default GridGifs; 