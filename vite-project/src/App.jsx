
import Buscador from './Buscador';
import GridGifs from './GridGifs';
import useSearchGifs from './useSearchGifs';


function App() {

  const { valorInput, gifs, onChange, onSubmit } = useSearchGifs();

  return (
    <>

      <Buscador //ctrl + espacio me sugiere que puedo agregar en este funcion, en este caso las prop que recibe mi funcion Buscador, aun no definidas
        valorInput={valorInput}
        onChange={onChange}
        onSubmit={onSubmit}
      />


      <GridGifs
        gifs={gifs} />  {/* pongo nombre de la variable gifs y le paso los gifs entre llaves*/}

    </>
  )
}

export default App
