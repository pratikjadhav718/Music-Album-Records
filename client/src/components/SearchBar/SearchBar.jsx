import { useState } from "react/cjs/react.development";
import "./searchbar.css";
import searchIcon from "./serarchIcon.png";

export const SearchBar = ({funSetSearchKey}) => {
    const [searchText, setSearchText] = useState("");

    const handleChnage = (e) =>{
        setSearchText(e.target.value);
    }

    const handleClick = ()=>{
        // console.log("fldkjsa");
        funSetSearchKey(searchText)
    }
    
    return (
        <div className="searchbar-main-div" >
            <div className="searchbar-div" >
                <input type="text" id="searchinput" placeholder="Search here..." 
                value={searchText} 
                onChange={handleChnage}
                
                /> <span><img style={{width:"25px", height:"25px"}} 
                onClick={()=>{handleClick()}}
                src={searchIcon} alt="" /></span>
            </div>
        </div>
    )
}