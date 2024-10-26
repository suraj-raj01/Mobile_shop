import { Nav } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
const AddData = () => {
  return (
    <>
      <div id="add_data_hero">
        <div id="add_data">
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
          <Nav.Link as={Link} to="mousedata">
            Mouse Data
          </Nav.Link>
          <Nav.Link as={Link} to="remotedata">
            Remote Data
          </Nav.Link>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
      <br /><br />
    </>
  );
};
export default AddData;
