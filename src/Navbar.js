import { Link } from "react-router-dom";
import {UseCartContext} from './CartContext'



function Navbar(){

    const {  CartList, IconCart } = UseCartContext();
    return(
        <div className="Nav">
        <ul>
           <Link  className="navlink" style={{margin:"10px"}}to="/">HOME</Link>

           <Link className="navlink" style={{margin:"10px"}}to="/categoria/1">Jordan</Link>

           <Link className="navlink" style={{margin:"10px"}}to="/categoria/2">Lebron</Link>

           <Link className="navlink" style={{margin:"10px"}}to="/categoria/3">Kyrie</Link>

           <Link className="navlink" style={{margin:"10px"}}to="/cart">Cart   {CartList.length< 1 ? ( " " ): IconCart()} </Link>

          
        </ul>
    </div>
    );
};
export default Navbar