import { Nav } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

const Watch_Layout = () =>{
    return(
        <>
        <div id="watch_layout">
        <div id="navigatehero">
        <span id="navigate" >
        <Nav.Link as={Link} to="allwatch">All Watches</Nav.Link>
        <Nav.Link as={Link} to="malewatch">Men Watches</Nav.Link>
        <Nav.Link as={Link} to="femalewatch">Women Watches</Nav.Link>
        <Nav.Link as={Link} to="kidswatch">Kids Watches</Nav.Link>
        </span>
        </div>
        <div id="outlet">
            <Outlet/>
        </div>
        </div>
        </>
    )
}
export default Watch_Layout;