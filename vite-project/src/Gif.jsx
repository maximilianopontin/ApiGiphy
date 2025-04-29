//componente para traer un tipo de gif especifico

function Gif({gif}) {
    return (
        <>
            {
                <img className="gif" src={gif.images.original.url} alt={gif.title} />//establecemos como clave unica el id
                
                }
        </>
    )
}

export default Gif;