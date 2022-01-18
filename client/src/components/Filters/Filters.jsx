import "./filter.css";

export const Filters = () => {
    return(
        <>
            <div className="main-div-for-filters">
                <select name="Genre" id="genre" className="genres-selector"  >
                    <option value="Pop Music">Pop Music</option>
                    <option value="Post-Disco">Post-Disco</option>
                    <option value="Rock">Rock</option>
                    <option value="Funk">Funk</option>
                    <option value="Soft Rock">Soft Rock</option>
                    <option value="Alternative Pop">Alternative Pop</option>
                    <option value="Bedroom Pop">Bedroom Pop</option>
                </select>

                <select name="year" id="year">
                    <option value="1920">1920</option>
                </select>

            </div>
        </>
    )
}