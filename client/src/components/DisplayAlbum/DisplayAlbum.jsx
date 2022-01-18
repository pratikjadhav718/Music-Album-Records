import "./displayalbum.css";
import coverpic from "./coverpic.jpg";

export const DisplayAlbum = ({showData}) => {
    console.log('showData:', showData)
    return (
        <>
            {
                showData.map((e) =>(
                    <div className="display-album-main-div" key={e.ids}>
                        <h2>{e.album_name}</h2>
                        <img src={coverpic} alt="" />
                        <h3>{e.artist_name}</h3>
                        <p> <span>{e.song_count}</span> songs</p>
                    </div>
                ))
            }
            {/* <div className="display-album-main-div">
                <h2>album name here</h2>
                <img src={coverpic} alt="" />
                <h3> Arijit Singh.</h3>
                <p> <span>10</span> songs</p>
            </div> */}
        </>
    )
}