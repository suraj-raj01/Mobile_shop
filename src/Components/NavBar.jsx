import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import Accordion from "react-bootstrap/Accordion";
import { MDBIcon } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const navigate = useNavigate();
  const myData = useSelector((state) => state.addCart.cart);
  console.log(myData);
  const dataCount = myData.length;

  const [searchData, setSearchData] = useState("");
  const handleSearch = () => {
    navigate(`/productsearch/${searchData}`);
  };
  const myCart = () => {
    navigate("/mycart");
  };
  const login = () => {
    navigate("/login");
  };
  return (
    <>
      <Navbar expand="lg" className="bg-body" id="navbar">
        <Container>
          <Navbar.Brand
            as={Link}
            to="home"
            style={{ fontWeight: "bold", color: "#183961" }}
          >
            Mobileshop
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse
            id="navbarScroll"
            style={{ backgroundColor: "white", padding: "5px 20px" }}
          >
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "300px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="products">
                Products
              </Nav.Link>
              <NavDropdown title="Categories" id="navbarScrollingDropdown">
                <Accordion defaultActiveKey="1">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Mobiles</Accordion.Header>
                    <Accordion.Body>
                      <NavDropdown.Item as={Link} to="iphone">
                        Apple
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="google">
                        Google
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="iqoo">
                        iQOO
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="motorola">
                        Motorola
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="nokia">
                        Nokia
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="nothing">
                        Nothing
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="oneplus">
                        OnePlus
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="oppo">
                        Oppo
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="redmi">
                        Redmi
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="realme">
                        Realme
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="samsung">
                        Samsung
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="vivo">
                        Vivo
                      </NavDropdown.Item>
                    </Accordion.Body>
                  </Accordion.Item>
                  {/* // laptops */}
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Laptops</Accordion.Header>
                    <Accordion.Body>
                      <NavDropdown.Item as={Link} to="acer">
                        Acer
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="asus">
                        Asus
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="dell">
                        Dell
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="hp">
                        HP
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="Lenovo">
                        Lenovo
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="mac">
                        MAC
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="zebronics">
                        Zebronics
                      </NavDropdown.Item>
                    </Accordion.Body>
                  </Accordion.Item>
                  {/* Tv's */}
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>Smarts Tv</Accordion.Header>
                    <Accordion.Body>
                      <NavDropdown.Item as={Link} to="acertv">
                        Acer smart TV
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="mitv">
                        Xiaomi smart TV
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="samsungtv">
                        Samsung TV
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="lgtv">
                        LG Tv
                      </NavDropdown.Item>
                    </Accordion.Body>
                  </Accordion.Item>

                  {/* Smart watches */}

                  <Accordion.Item eventKey="3">
                    <Accordion.Header>Watches</Accordion.Header>
                    <Accordion.Body>
                      <NavDropdown.Item as={Link} to="allwatch">
                        All Watches
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="malewatch">
                        Male Watches
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="femalewatch">
                        Female Watches
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="kidswatch">
                        Kids Watches
                      </NavDropdown.Item>
                    </Accordion.Body>
                  </Accordion.Item>

                  {/* Keyboards */}
                  <Accordion.Item eventKey="4">
                    <Accordion.Header>Keyboards</Accordion.Header>
                    <Accordion.Body>
                      <NavDropdown.Item as={Link} to="zebronics_key">
                        Zebronics
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="logitech">
                        Logitech
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="dell_key">
                        Dell
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="hp_key">
                        HP
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="portronics">
                        Portronics
                      </NavDropdown.Item>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="5">
                    <Accordion.Header>Remotes</Accordion.Header>
                    <Accordion.Body>
                      <NavDropdown.Item as={Link} to="acertv">
                        TV Remote
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="mitv">
                        AC Remote
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="samsungtv">
                        Car Remote
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="lgtv">
                        Box Remote
                      </NavDropdown.Item>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </NavDropdown>
              <Nav.Link as={Link} to="offer">
                Offers
              </Nav.Link>
              <Nav.Link as={Link} to="about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="services">
                Services
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                placeholder="Search . . ."
                className="me-2"
                aria-label="Search"
                value={searchData}
                onChange={(e) => {
                  setSearchData(e.target.value);
                }}
              />
              <Button variant="outline-primary" onClick={handleSearch} style={{textTransform:'capitalize'}}>
                Search
              </Button>
            </Form>
            <div id="icons">
              <span onClick={myCart}>
                <MDBIcon color="#183961" fas icon="shopping-cart" />
                <sup id="count">{dataCount}</sup>
              </span>
              <span onClick={login}>
                <MDBIcon
                  color="#183961"
                  fas
                  icon="circle-user"
                  style={{
                    color: "#183961",
                    marginLeft: "10px",
                    fontSize: "22px",
                    cursor:'pointer'
                  }}
                />
              </span>
              
              {/* <span >
          <MDBIcon fas icon="circle-half-stroke" style={{color:'#183961',marginLeft:'10px',fontSize:'18px'}}/>
          </span> */}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default NavBar;
