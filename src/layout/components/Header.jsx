import "./Header.css"
import { Link, NavLink } from "react-router-dom"

function Header() {

  return (
    <header className="header-container">
        <Link to="/">
            <img src="/logo-sportsee.svg"/>
        </Link>
        <nav className="header-menu">
            <ul>
                <li><NavLink>Accueil</NavLink></li>    
                <li><NavLink>Profil</NavLink></li>    
                <li><NavLink>Réglage</NavLink></li>
                <li><NavLink>Communauté</NavLink></li>    
            </ul>        
        </nav>
    </header>
  )
}

export default Header