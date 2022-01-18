import "./home.css";
import { DisplayAlbum } from "./DisplayAlbum/DisplayAlbum"
import { Footer } from "./footer";
import { useEffect, useState } from "react";
import { SearchBar } from "./SearchBar/SearchBar";

export const Home = () => {

    const [pageNo, setpageNo] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        // console.log("IN use effect");
        fetch(`http://localhost:2345/album?page=${pageNo}`)
        .then((d) => d.json())
        .then((res) =>{
            // console.log("res", res.album);
            setShowData(res.album)
            setTotalPages(res.totalPages);
        })
    }, [pageNo])
    

    const  handlePageChange = function(check){
    
        if(check == "prev"){
            if(pageNo > 1){
                setpageNo(pageNo - 1);
            }
        }else if(check == "next"){
            // console.log('next:', pageNo, totalPages);
            if(pageNo < totalPages){
                setpageNo(pageNo + 1)
                // console.log('pageNo:', pageNo)
            }
        }

    }

    var [showData, setShowData] = useState([
        // {album_name:"Sour", ids:1, image_link:"", artist_name:"Michael Jackson",song_count:10, description:"clear"}, 
        // {album_name:"Sour", ids:2, image_link:"", artist_name:"Michael Jackson",song_count:10, description:"clear"}, 
        // {album_name:"Sour", ids:3, image_link:"", artist_name:"Michael Jackson",song_count:10, description:"clear"}, 
        // {album_name:"Sour", ids:4, image_link:"", artist_name:"Michael Jackson",song_count:10, description:"clear"}
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
            <Footer pageNo={pageNo} totalPages={totalPages} handlePageChange={handlePageChange}/>
        </div>
    )
}