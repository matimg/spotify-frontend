import logo from "../img/Spotify.png";
import '../styles/navbar.css';

export const Navbar = ({ setArtist, setAlbums, setLoading }) => {
    //Se encarga de hacer el post al backend, la respuesta las almacena en dos estados artist y albums de la vista app.js
    const searchAlbums = async (e) => {
        e.preventDefault();
        setLoading(true);
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
    
        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: JSON.stringify({ nombreArtista:  e.target[0].value})
        };
    
        try {
          const res = await fetch(process.env.REACT_APP_BACKEND_URL + "/getAlbums", requestOptions);
          const data = await res.json();
          
          if (data.respuesta !== {}) {
            setArtist(data.respuesta.artista);
            setAlbums(data.respuesta.albumsInfo);
          }
          else{
            setArtist({});
            setAlbums([]);
          }
          setLoading(false);
        } catch (error) {
          console.log(error);
          setLoading(false);
        }
      };
    return (
        <nav className="navbar navbar-expand-sm navbar-dark fixed-top d-flex justify-content-start">
            <img className="logo mx-3" src={logo} alt=""/>
            <form className="w-100 d-flex" onSubmit={searchAlbums}>
                <input className="form-control mr-sm-2 w-25" type="text" placeholder="Buscar artista, banda..." />
                <button className="btn btn-success mx-1" type="submit" >Buscar</button>
            </form>
        </nav>
    );
};