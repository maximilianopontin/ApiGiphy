//componente para traer un tipo de gif especifico

import { motion } from "framer-motion";// herramienta par animacion de imagenes


function Gif({gif}) {
    return (
        <>
            {
                <motion.img 
                drag // permite mover la imagen para donde quieras
                initial={{ scale:0}}   // estado inicial de la imagen
                animate= {{ scale:1, transition: {//estado animado
                    duration: 1
                }}} 
                whileHover={{ scale: 1.2}} //cundo hacemos hover agranda la imagen
                className="gif" 
                src={gif.images.original.url} 
                alt={gif.title} />//establecemos como clave unica el id
                
                }
        </>
    )
}

export default Gif;