import "./home.css";
import { DisplayAlbum } from "./DisplayAlbum/DisplayAlbum"
import { Footer } from "./footer";
import { useEffect, useState } from "react";
import { SearchBar } from "./SearchBar/SearchBar";
import { Filters } from "./Filters/Filters";

export const Home = () => {

    const [pageNo, setpageNo] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [searchKey, setSearchKey] = useState("");
    const [genreValue, setGenreValue] = useState("");

    const funGenre = (newGen)=>{
        // console.log(newGen, "adbdfd");
        setGenreValue(newGen);
    }

    const funSetSearchKey = (newkey)=>{
        // console.log('newkey:', newkey)
        setSearchKey(newkey);
    }
    useEffect(() => {
        // console.log("IN use effect");
        if(genreValue.length > 0){
            fetch(`http://localhost:2345/album?genre=${genreValue}`)
            .then((d) => d.json())
            .then((res) =>{
                // console.log("res", res.album);
                setShowData(res.album)
                setTotalPages(res.totalPages);
            })
        }else if(searchKey == ""){

            fetch(`http://localhost:2345/album?page=${pageNo}`)
            .then((d) => d.json())
            .then((res) =>{
                // console.log("res", res.album);
                setShowData(res.album)
                setTotalPages(res.totalPages);
            })
        }else{
            fetch(`http://localhost:2345/album?page=${pageNo}&searchalbum=${searchKey}`)
            .then((d) => d.json())
            .then((res) =>{
                // console.log("res", res.album);
                setShowData(res.album)
                setTotalPages(res.totalPages);
            })
        }
    }, [pageNo, searchKey, genreValue])
    

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
            <SearchBar funSetSearchKey={funSetSearchKey}/>

            <Filters funGenre={funGenre}/>
            
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