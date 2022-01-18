import "./home.css";
import { DisplayAlbum } from "./DisplayAlbum/DisplayAlbum"
import { Footer } from "./footer";
import { useState } from "react";
import { SearchBar } from "./SearchBar/SearchBar";

export const Home = () => {
    const [pageNo, setpageNo] = useState(1);

    const [showData, setShowData] = useState([
        {album_name:"Sour", ids:1, image_link:"", artist_name:"Michael Jackson",song_count:10, description:"clear"}, 
        {album_name:"Sour", ids:2, image_link:"", artist_name:"Michael Jackson",song_count:10, description:"clear"}, 
        {album_name:"Sour", ids:3, image_link:"", artist_name:"Michael Jackson",song_count:10, description:"clear"}, 
        {album_name:"Sour", ids:4, image_link:"", artist_name:"Michael Jackson",song_count:10, description:"clear"}
    ])

    return (
        <div>
            <SearchBar />
            
            {/* <h1> Home </h1> */}
            <div  className="container-div-for-display-album">

                <DisplayAlbum showData={showData}/>
                {/* <DisplayAlbum />
                <DisplayAlbum />
                <DisplayAlbum /> */}

                {/* <DisplayAlbum />
                <DisplayAlbum /> */}
            </div>
            <Footer pageNo={pageNo}/>
        </div>
    )
}