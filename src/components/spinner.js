import gif from "../img/gifSpotify.gif";
export const Spinner = () => {
    return (
        <div className="m-0 vh-100 row text-center align-content-center justify-content-center">
            <div className="col-auto">
                <img width="280" height="280" className="giphy-embed" src={gif} />
            </div>
        </div>
    );
};