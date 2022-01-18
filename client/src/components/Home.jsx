import "./home.css";
import { DisplayAlbum } from "./DisplayAlbum/DisplayAlbum"
import { Footer } from "./footer";
import { useState } from "react";
import { SearchBar } from "./SearchBar/SearchBar";

export const Home = () => {
    const [pageNo, setpageNo] = useState(1);

    return (
        <div>
            <SearchBar />
            
            {/* <h1> Home </h1> */}
            <div  className="container-div-for-display-album">

                <DisplayAlbum />
                <DisplayAlbum />
                <DisplayAlbum />
                <DisplayAlbum />

                {/* <DisplayAlbum />
                <DisplayAlbum /> */}
            </div>
            <Footer pageNo={pageNo}/>
        </div>
    )
}