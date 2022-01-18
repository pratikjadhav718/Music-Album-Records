import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import "./displayalbum.css";

export const DisplayAlbum = ({showData}) => {
    // console.log('showData:', showData)

    const handleAlbumClick = (e)=>{
        console.log("clicked albdsjf", e._id);
        // <Redirect to={`/album/${e._id}`} />
        window.location = `/album/${e._id}`;
    }
    return (
        <>
            {
                showData.map((e) =>(
                    
                    <div className="display-album-main-div" key={e._id} onClick={()=>{handleAlbumClick(e)}}>
                        <h2>{e.album_name}</h2>
                        <img src={e.poster} alt="" />
                        <h3>{e.artist.name}</h3>
                        <p><span>{e.genres[0]}</span> ,<span>{e.genres[1]}</span> 
                        <span>{e.genres[2]}</span> ,<span>{e.genres[3]}</span>
                        </p>
                        
                        <p> <span>{e.song_list.length}</span> songs</p>
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