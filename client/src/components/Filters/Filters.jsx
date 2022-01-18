
import { useState } from "react/cjs/react.development";
import "./filter.css";

export const Filters = ({funGenre}) => {

    const handleselctChange = (e) =>{
        funGenre(e.target.value);
    }
    return(
        <>
            <div className="main-div-for-filters">
                <select name="Genre" id="genre" className="genres-selector" onChange={handleselctChange}>
                    <option value="Pop Music" >Pop Music</option>
                    <option value="Post-Disco">Post-Disco</option>
                    <option value="Rock">Rock</option>
                    <option value="Funk">Funk</option>
                    <option value="Soft Rock">Soft Rock</option>
                    <option value="Alternative Pop">Alternative Pop</option>
                    <option value="Bedroom Pop">Bedroom Pop</option>
                </select>

                <select name="year" id="year" className="year-selectore">
                <option value="Popular">Popular</option>
                <option value="Newest">Newest</option>
                <option value="Oldest">Oldest</option>
                </select>



            </div>
        </>
    )
}