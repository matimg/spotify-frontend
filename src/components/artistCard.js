import '../styles/artistCard.css';

export const ArtistCard = ({ nombre, seguidores, imagen }) => {
    return (
        <div className="text-center bg-dark">
            <img className="card-img-top rounded-circle w-50" src={imagen} height="120px" alt=""/><br />
        <div className="card text-center styleCard w-100 bg-dark text-white">
                
            <div className="card-body">
                <h5 className="card-title">{nombre}</h5>
                <p className="card-text">Seguidores: {seguidores}</p>
            </div>
        </div>
        </div>
        
    );
};