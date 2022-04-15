import { Link } from "react-router-dom";

function Navbar(){
    return(
        <nav className="Nav">
        <ul>
           <Link  className="navlink" style={{margin:"10px"}}to="/">HOME</Link>

           <Link className="navlink" style={{margin:"10px"}}to="/categoria/1">Jordan</Link>

           <Link className="navlink" style={{margin:"10px"}}to="/categoria/2">Lebron</Link>

           <Link className="navlink" style={{margin:"10px"}}to="/categoria/3">Kyrie</Link>

           <Link className="navlink" style={{margin:"10px"}}to="/cart">Cart</Link>
           
        </ul>
    </nav>
    );
};
export default Navbar