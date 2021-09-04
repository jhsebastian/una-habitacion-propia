import logoUHP from '../../assets/logo-uhp.png';
import './Header.css';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light navbar-custom">
            <Link to="/">
                <a class="navbar-brand" href="#">
                    <img src={logoUHP} width="150" height="80" class="d-inline-block align-top home-icon" alt="" />
                </a>
            </Link>
            
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav list-links-navbar">
                    <Link to="/">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Inicio</a>
                        </li>
                    </Link>
                    <Link to="/quienesSomos">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Quienes Somos</a>
                        </li>
                    </Link>
                    <Link to="/apoyoVisual">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Producto Audiovisual</a>
                        </li>
                    </Link>
                    <Link to="/descargables">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Descargables</a>
                        </li>
                    </Link>                    
                </ul>
            </div>
        </nav>
    )
}

export default Header;