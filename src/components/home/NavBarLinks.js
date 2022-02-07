import { NavLinks } from "../../design/js/Navbar";

const NavBarLinks = (props) => {
    return (
        <div className="collapse navbar-collapse" id="navbarNav">
        <NavLinks className="navbar-nav mx-auto nav-control-text ttu">
            <li className="nav-item">
                <a className="nav-link active" href="./">INICIO</a>
                
            </li>

            <li className="nav-item">
                <a className="nav-link active" href="">REGRAS</a>
            </li>

            <li className="nav-item">
                <a className="nav-link active" href="lojinha">LOJA</a>
            </li>

            <li className="nav-item">
                <a className="nav-link active" href="contato">CONTATO</a>
            </li>
            
            <li className="nav-item">
                <a className="nav-link active" href="#">ENTRAR</a>
            </li>
        </NavLinks>
    </div>
    )
}

export default NavBarLinks; 