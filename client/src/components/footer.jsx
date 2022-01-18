import { Link } from "react-router-dom";

export const Footer = ({pageNo}) => {
    return (
        <div style={{
            display:"flex",
            gap:"30px",
            width:"500px",
            margin:"auto",
            marginTop:"50px"
            
        }}>
            <Link to="/">prev</Link>
            <Link to="/">{pageNo}</Link>
            <Link to="/">next</Link>
        </div>
    );
};