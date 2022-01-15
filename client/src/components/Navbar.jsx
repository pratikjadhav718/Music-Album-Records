import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <div style={{
            display:"flex",
            gap:"30px",
            width:"500px",
            margin:"auto",
            marginTop:"50px"
            
        }}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/users">Users</Link>
            <Link to="/login">Login</Link>
        </div>
    );
};