import { useState } from 'react'
import Card from './Card'

const Form = () => {

  const [user, setUser] = useState({
        nombre: '',
        colorFavorito: ''
    })

    const [show, setShow] = useState(false)
    const [error, setError] = useState(false) 

    const handleSubmit = () => {
      const withoutSpaces = user.nombre.trim();
    
        if(withoutSpaces.length >= 3 && user.colorFavorito.length >= 6){
            setShow(true)
            setError(false)
        } else {
            setError(true)
        }
    }

    console.log(user)
  return (
    <div>
      <h1>Elige un color!!!</h1>
      <label>Ingresa tu nombre</label>
        <input type="text" value={user.nombre}
            onChange={(event) => setUser({...user, nombre: event.target.value})}
        />
        <br> 
        </br>
        <label>Ingresa tu color Favorito</label>
        <input type="text" value={user.colorFavorito}
            onChange={(event) => setUser({...user, colorFavorito: event.target.value})}
        />
        <br> 
        </br>
        <br> 
        </br>
        <button onClick={handleSubmit}>Enviar</button>
        {show && <Card/> && <h3>Clara-mente me enrrede con el props y no sale el Card T___T</h3> } 
        {error && <h4 style={{color: 'red'}}>Por favor chequea que la informacion este correcta</h4>}
    </div>
  )
}

export default Form


