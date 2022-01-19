import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import "./showalbumdetails.css";

export const ShowAlbumDetails = () =>{
    // console.log(window.location.pathname);
    const id = useParams();
    // console.log('id:', id);

    const [dataobj, setdatobj] = useState({});

    useEffect(() =>{
        fetch(`http://localhost:2345/album/${id.id}`)
        .then((d) => d.json())
        .then((res) => {
            // console.log(res[0]);
            setdatobj(res[0]);
        })
    })
    return (
        <>
        <div className="background-album-div">
            <div className="display-album-data">
                <h1>{dataobj.album_name}</h1>
                <img src={dataobj.poster} alt="" />
                <h3>{dataobj.year}</h3>
                <h2>{dataobj.artist.name}</h2>
                <p>
                {
                    dataobj.genres.map((e) => (
                        <span>{e} </span>
                    ))
                }
                </p>
            </div>
        </div>
        </>
    )
}