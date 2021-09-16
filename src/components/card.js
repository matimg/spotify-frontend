import '../styles/card.css';

export const Card = ({ nombre, fecha, imagen }) => {
    return (

        <div className="col-3 pb-5">
            <div className="card cardStyle">
                <img className="card-img-top" src={imagen} height="200px"/>
                <div className="card-body">
                    <h5 className="card-title">{nombre}</h5>
                    <p className="card-text">{fecha}</p>
                </div>
            </div>
        </div>
    );
};