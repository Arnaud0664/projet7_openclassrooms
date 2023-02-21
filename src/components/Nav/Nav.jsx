import { Link } from "react-router-dom";

function Nav() {
    return (
    <nav className="header-nav">
			<Link to="/home" className="header-nav_link-home">
				Accueil
			</Link>
			<Link to="/about" className="nav-header_link-about">
				A Propos
			</Link>
		</nav>
	)
}

export default Nav;