import logo from "../img/Spotify.png";
import '../styles/navbar.css';

export const Navbar = ({ setSearchQuery }) => {
    const onSubmit = (e) => {
        e.preventDefault();
        setSearchQuery(e.target[0].value);
    };
    return (
        <nav className="navbar navbar-expand-sm navbar-dark fixed-top d-flex justify-content-start">
            <img className="logo mx-3" src={logo} />
            <form className="w-100 d-flex" onSubmit={onSubmit}>
                <input className="form-control mr-sm-2 w-25" type="text" placeholder="Buscar artista, banda..." />
                <button className="btn btn-success mx-1" type="submit" >Buscar</button>
            </form>
        </nav>
    );
};