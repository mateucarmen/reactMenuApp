import { Link } from 'react-router-dom'
import "./Header.css"

function Header() {

  return (
    <>
    <div className="header-container">
    <nav className="nav-bar">
        <ul className="nav-list">
            <li className="nav-item"><Link to="/menuslist" className="nav-item"> Tus comidas </Link></li>
            <li className="nav-item"><Link to="/menuform" className="nav-item"> Añadir comida </Link></li>
            <li className="nav-item"><Link to="/logout" className="nav-item">  Cerrar sesión </Link></li>
        </ul>
    </nav>
    </div>
   </>
  )
}

export default Header