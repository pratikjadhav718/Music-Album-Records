
import { useState } from "react/cjs/react.development";
import "./filter.css";

export const Filters = ({funGenre}) => {
    
    const [yearArr, setYearArr] = useState(
        [
            2021, 2020, 2019, 2018, 2017, 2016, 2015,
            2014, 2013, 2012, 2011, 2010, 2009, 2008,
            2007, 2006, 2005, 2004, 2003, 2002, 2001,
            2000, 1999, 1998, 1997, 1996, 1995, 1994,
            1993, 1992, 1991, 1990, 1989, 1988, 1987,
            1986, 1985, 1984, 1983, 1982, 1981, 1980,
            1979, 1978, 1977, 1976, 1975, 1974, 1973,
            1972, 1971, 1970
        ]
    );

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
                  {
                      yearArr.map((e) => (
                          <option key={e} value={e}>{e}</option>
                      ))                      
                  }  
                </select>



            </div>
        </>
    )
}