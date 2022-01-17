import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <div style={{
            display:"flex",
            gap:"30px",
            width:"500px",
            margin:"auto",
            marginTop:"50px"
            
        }}>
            <Link to="/">prev</Link>
            <Link to="/">1</Link>
            <Link to="/">next</Link>
        </div>
    );
};