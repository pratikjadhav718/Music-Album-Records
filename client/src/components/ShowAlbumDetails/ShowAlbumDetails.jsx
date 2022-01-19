import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./showalbumdetails.css";

export const ShowAlbumDetails = () =>{
    console.log(window.location.pathname);
    const id = useParams();
    console.log('id:', id);

    useEffect(() =>{
        fetch(`http://localhost:2345/album/${id.id}`)
        .then((d) => d.json())
        .then((res) => {
            console.log(res[0]);
        })
    })
    return (
        <>
        Album Details
        </>
    )
}