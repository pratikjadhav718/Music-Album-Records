import "./displayalbum.css";
import coverpic from "./coverpic.jpg";

export const DisplayAlbum = () => {
    return (
        <div className="display-album-main-div">
            <h2>album name here</h2>
            <img src={coverpic} alt="" />
            <h3> Arijit Singh.</h3>
            <p> <span>10</span> songs</p>
        </div>
    )
}