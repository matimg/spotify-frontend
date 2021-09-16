import { Navbar } from "../components/navbar";
import { Card } from "../components/card";
import { Spinner } from "../components/spinner";
import { ArtistCard } from "../components/artistCard";
import { useState, useEffect } from "react";
import '../styles/app.css';

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [artist, setArtist] = useState({});
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(false);



  const searchAlbums = async (query) => {
    setLoading(true);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify({ nombreArtista: query })
    };

    try {
      const res = await fetch(process.env.REACT_APP_BACKEND_URL + "/getAlbums", requestOptions);
      const data = await res.json();
      setArtist(data.respuesta.artist);
      setAlbums(data.respuesta.albumsInfo);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(
    () => {
      searchAlbums(searchQuery);
    },
    [searchQuery]
  );

  if (loading) {
    return (
      <div className="contenedor">
        <Navbar
          setSearchQuery={setSearchQuery}
        />
        <Spinner />
      </div>
    );
  }
  else if (albums.length !== 0) {
    return (
      <div className="contenedor">
        <Navbar
          setSearchQuery={setSearchQuery}
        />
        <div className="container-fluid mt-5 pt-4">
          <div className="mx-auto w-25 mb-3">
            <ArtistCard
              nombre={artist.nombre}
              seguidores={artist.seguidores}
              imagen={artist.imagenes[2].url}
            />
          </div>

          <div className="row">
            {albums.map((item, index) => {
              return (
                <Card
                  key={index}
                  nombre={item.nombre}
                  fecha={item.fecha}
                  imagen={item.imagenes[0].url}
                />
              )
            })}
          </div>
        </div>
      </div>
    );
  }
  else {
    return (
      <div className="contenedor">
        <Navbar
          setSearchQuery={setSearchQuery}
        />
        <p>No se encontaron resultados...</p>
      </div>
    );
  }
}

export default App;
