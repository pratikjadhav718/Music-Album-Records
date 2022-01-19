import { Link } from "react-router-dom";
import "./footer.css";

export const Footer = ({pageNo, totalPages, handlePageChange}) => {
    return (
        <div style={{
            display:"flex",
            gap:"30px",
            width:"400px",
            margin:"auto",
            marginTop:"15px"
            
        }}
        className="footer-main-div">
            <button onClick={()=>{handlePageChange("prev")}}>Prev</button>
            <div className="page-no-div"><p>{pageNo}</p></div>
            <button onClick={()=>{handlePageChange("next")}}>Next</button>
            <div className="pageno-and-totalpages"><p>{pageNo} of {totalPages}</p></div>
        </div>
    );
};