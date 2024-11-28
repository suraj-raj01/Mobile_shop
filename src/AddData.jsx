import { Nav,} from "react-bootstrap";
import { Outlet,} from "react-router-dom";
import { Link } from "react-router-dom";
const AddData = () => {

  return (
    <>
      <div id="add_data_hero">
        <div id="add_data">
        <div style={{
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      width:'100%',
      padding:'10px',
      color:'#fff',
      backgroundColor:'#18396193',
      borderRadius:'8px'
    }}>
      <h3 style={{fontWeight:'bold'}}>Admin DashBoard</h3>
    </div>
          <Nav.Link as={Link} to="mobiledata">
            Mobile Data
          </Nav.Link>
          <Nav.Link as={Link} to="laptopdata">
            Laptop Data
          </Nav.Link>
          <Nav.Link as={Link} to="tvdata">
            TV Data
          </Nav.Link>
          <Nav.Link as={Link} to="keyboarddata">
            Keyboard Data
          </Nav.Link>
          <Nav.Link as={Link} to="watchdata">
            Watches Data
          </Nav.Link>
          <Nav.Link as={Link} to="remotedata">
            Remote Data
          </Nav.Link>
          <Nav.Link as={Link} to="customerdetails">
            Customer Orders
          </Nav.Link>
        </div>
        <div id="outlets">
          <Outlet />
        </div>
      </div>
      <br />
      <br />
      <br />
    </>
  );
};
export default AddData;
