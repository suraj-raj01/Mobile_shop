// import axios from "axios";
// import { useEffect, useState } from "react";
// import { Button, Container } from "react-bootstrap";

import { Nav } from "react-bootstrap";
import { Outlet,Link } from "react-router-dom";

const Products = () =>{
  return (
    <>
      <div style={{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        padding:'40px 0px 30px 0px',
        fontWeight:'600',
        gap:'10px',
        fontSize:'20px',
        color:'#183961'
        }}>
      <Nav.Link as={Link} to="allproducts">All Products</Nav.Link> |
      <Nav.Link as={Link} to="premiumproducts"><i class="fa-brands fa-square-web-awesome"></i> Premium  Products</Nav.Link>
      </div>
      <hr />
    <div>
      <Outlet/>
    </div>
    </>
  )
}
export default Products;