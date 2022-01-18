import { Link } from "react-router-dom";

export const Footer = ({pageNo, totalPages, handlePageChange}) => {
    return (
        <div style={{
            display:"flex",
            gap:"30px",
            width:"500px",
            margin:"auto",
            marginTop:"50px"
            
        }}>
            <Link to="/" onClick={()=>{handlePageChange("prev")}}>prev</Link>
            <Link to="/">{pageNo}</Link>
            <Link to="/" onClick={()=>{handlePageChange("next")}}>next</Link>
            <Link to="/">{pageNo} of {totalPages}</Link>
        </div>
    );
};