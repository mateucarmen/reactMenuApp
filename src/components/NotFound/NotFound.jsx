import React from 'react'
import { Link } from 'react-router-dom'
import "./NotFound.css"

function NotFound() {
  return (
    <div className="notfound-container">
        <h2 className="notfound-title">Esta página no existe!</h2>
        <img src="https://edteam-media.s3.amazonaws.com/blogs/big/2ab53939-9b50-47dd-b56e-38d4ba3cc0f0.png" alt="Error 404" />
        <Link to="/menuslist" className="return-btn"><button>Volver a la página principal</button></Link>
    </div>
  )
}

export default NotFound