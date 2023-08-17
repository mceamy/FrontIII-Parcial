import React from 'react'
import Form from './Form'

const Card = (props) => {

    return (
    <div>
        <h3>Hola {props.user.nombre}!!
        <br />
          sabemos que tu color favorito es: </h3>
          <br />
          <button style={user.colorFavorito}>{user.colorFavorito}</button>
    </div>
  )
}

export default Card
