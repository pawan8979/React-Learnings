import {Link} from "react-router-dom";

export const Nav= ()=>{
    return(
        <div>
            <Link to="/">HOME</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/contact">Contact</Link>
        </div>
    );
}