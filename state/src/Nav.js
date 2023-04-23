import {Link} from "react-router-dom";

export const Nav= ()=>{
    return(
        <div>
            <Link to="/">HOME</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/contact">Contact</Link>
        </div>
    );
}