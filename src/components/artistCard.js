import '../styles/artistCard.css';

export const ArtistCard = ({ nombre, seguidores, imagen }) => {
    return (
        <div className="card text-center styleCard mx-auto">
                <img className="card-img-top rounded-circle pl-3 pr-3" src={imagen} height="120px" />
            <div className="card-body">
                <h5 className="card-title">{nombre}</h5>
                <p className="card-text">Seguidores: {seguidores}</p>
            </div>
        </div>
    );
};