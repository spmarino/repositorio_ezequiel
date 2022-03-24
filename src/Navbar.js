import { Link } from "react-router-dom";

function Navbar(){
    return(
        <nav>
        <ul>
           <Link style={{margin:"10px"}}to="/">inicio</Link>

           <Link style={{margin:"10px"}}to="/categoria/1">categoria 1</Link>

           <Link style={{margin:"10px"}}to="/categoria/2">categoria 2</Link>

           <Link style={{margin:"10px"}}to="/categoria/3">categoria 3</Link>
           
        </ul>
    </nav>
    );
};
export default Navbar