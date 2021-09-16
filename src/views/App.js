import { Navbar } from "../components/navbar";
import { Card } from "../components/card";
import { Spinner } from "../components/spinner";
import { ArtistCard } from "../components/artistCard";
import { useState } from "react";
import '../styles/app.css';

function App() {
  const [artist, setArtist] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(false);

  //Si esta haciendo el fetch muestro spinner
  if (loading) {
    return (
      <div className="contenedor">
        <Navbar
          setAlbums={setAlbums}
          setArtist={setArtist}
          setLoading={setLoading}
        />
        <Spinner />
      </div>
    );
  }
  else {
    if ((albums && albums.length !== 0) && artist) {
      return (
        <div className="contenedor">
          <Navbar
            setAlbums={setAlbums}
            setArtist={setArtist}
            setLoading={setLoading}
          />
          <div className="container-fluid mt-5 pt-4">
            <div className="row">
            <div className="w-25">
              <ArtistCard
                nombre={artist.nombre}
                seguidores={artist.seguidores}
                imagen={artist.imagenes[2].url}
              />
            </div>
              {albums && albums.map((item, index) => {
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
            setAlbums={setAlbums}
            setArtist={setArtist}
            setLoading={setLoading}
          />
        </div>
      );
    }
  }
}

export default App;
