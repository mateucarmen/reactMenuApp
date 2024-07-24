import React from 'react'
import { Link } from 'react-router-dom'
import "./NotFound.scss"

function NotFound() {
  return (
    <div>
        <h2>Esta página no existe!</h2>
        <Link to="/" className="button">Volver a la página principal</Link>
    </div>
  )
}

export default NotFound