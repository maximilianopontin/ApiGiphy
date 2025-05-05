//creamos componente buscador ya que se puede utilizar en otra parte del proyecto

function Buscador({onSubmit, valorInput, onChange}) {//pasamos las props que usamos en el componente app para este componente
// estas props debemos recibirlas desde el componente app en el buscador.



    return (
        <>

        <h2>Buscador de Gifs</h2>
            <form className= "form-buscador" onSubmit={onSubmit}>
                <input className= "buscador" value={valorInput} onChange={onChange} />
            </form>

        </>
    )
}

export default Buscador