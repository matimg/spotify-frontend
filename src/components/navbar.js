import logo from "../img/Spotify.png";
import '../styles/navbar.css';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark fixed-top d-flex justify-content-start">
            <img className="logo mx-3" src={logo} />
            <input className="form-control mr-sm-2 w-25" type="text" placeholder="Buscar artista, banda..." />
            <button className="btn btn-success mx-1" type="submit">Buscar</button>
        </nav>
    );
};