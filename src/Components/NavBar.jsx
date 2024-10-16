import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import {MDBIcon } from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const NavBar = () => {
  const navigate = useNavigate();
  const myData = useSelector((state)=>state.addCart.cart)
  console.log(myData)
  const dataCount = myData.length;

  const [searchData,setSearchData] = useState("");
  const handleSearch = () =>{
      navigate(`/productsearch/${searchData}`);
  }
  const myCart = () =>{
    navigate("/mycart");
  }
  const login = () =>{
    navigate("/login");
  }
  return (
    <>
      <Navbar expand="lg" className="bg-body" id='navbar'>
      <Container>
        <Navbar.Brand as={Link} to="home" style={{fontWeight:'bold',color:'#183961'}}>Mobileshop</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" style={{backgroundColor:'white',padding:'5px 20px'}}>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '300px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link as={Link} to="products">Products</Nav.Link>
            <NavDropdown title="Categories" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="iphone">Apple</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="google">Google</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="iqoo">iQOO</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="motorola">Motorola</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="nokia">Nokia</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="nothing">Nothing</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="oneplus">OnePlus</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="oppo">Oppo</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="redmi">Redmi</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="realme">Realme</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="samsung">Samsung</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="vivo">Vivo</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="offer">
              Offers
            </Nav.Link>
            <Nav.Link as={Link} to="about">About</Nav.Link>
            <Nav.Link as={Link} to="services">Services</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              placeholder="search..."
              className="me-2"
              aria-label="Search"
              value={searchData}
              onChange={(e)=>{setSearchData(e.target.value);
              }}
            />
            <Button variant="outline-primary" onClick={handleSearch}>Search</Button>
          </Form>
          <div id="icons">
          <span onClick={myCart}>
          <MDBIcon fas icon="shopping-cart" style={{color:'#183961'}}/><sup id='count'>{dataCount}</sup>
          </span>
          <span onClick={login}>
          <MDBIcon fas icon="circle-user" style={{color:'#183961',marginLeft:'10px',fontSize:'18px'}}/>
          </span>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
};
export default NavBar;
