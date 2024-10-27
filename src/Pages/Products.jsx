// import axios from "axios";
// import { useEffect, useState } from "react";
// import { Button, Container } from "react-bootstrap";

import { Nav } from "react-bootstrap";
import { Outlet,Link } from "react-router-dom";

// import { useDispatch } from "react-redux";
// import { addCartData } from "../addToCartSlice";
// import { Link, Outlet, useNavigate } from "react-router-dom";
// import Nav from 'react-bootstrap/Nav';

// const Products = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [mydata, setMydata] = useState([]);

//   const loadData = () => {
//     let api = "http://localhost:3000/products";
//     axios.get(api).then((res) => {
//       setMydata(res.data);
//     });
//   };
//   useEffect(() => {
//     loadData();
//   }, []);

//   const addDataToCart = (id, name, model, brand, OS, price, img, desc) => {
//     dispatch(
//       addCartData({
//         id: id,
//         name: name,
//         model: model,
//         brand: brand,
//         OS: OS,
//         price: price,
//         img: img,
//         description: desc,
//         qnty: 1,
//       })
//     );
//   };

//   const detail = (id) => {
//     navigate(`/details/${id}`);
//   };
//   const checkOut = (id) =>{
//     navigate(`/checkout/${id}`)
// }

//   const res = mydata.map((key) => {
//     return (
//       <>
//         <Container>
//           <div
//             id="products"
//             style={{
//               display: "flex",
//               padding: "20px",
//               width: "100%",
//               alignItems: "center",
//             }}
//           >
//             <div id="box1">
//               <img
//                 id="orgImg"
//                 src={key.img}
//                 alt=""
//                 width="300px"
//                 height="300px"
//                 onClick={() => {
//                   detail(key.id);
//                 }}
//               />
//             </div>
//             <div id="box2">
//               <h3>{key.name}</h3>
//               <b>{key.description}</b>
//               <br />
//               <div style={{display:'flex',alignItems:'center',justifyContent:'start',gap:'2px',padding:'10px 0px',color:'goldenrod'}}>
//               <span style={{padding:'1px 10px 0px 0px',fontWeight:'bold',fontSize:'14px',color:'black'}}>4.3</span> 
//               <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star-half-stroke"></i>
//               <span style={{padding:'1px 0px 0px 10px',fontSize:'14px',color:'black',textTransform:'lowercase',color:'#183961'}}>1,541 ratings</span>
//               </div>
//               <span>Model : {key.model}</span>
//               <br />
//               <span>Brand : {key.brand}</span>
//               <br />
//               <span>OS : {key.OS}</span>
//               <br />
//               <span>
//                 Price : {key.price}
//                 {".00 ₹"}
//               </span>
//               <br />
//               <br />

//               <Button
//                 variant="outline-primary"
//                 onClick={() => {
//                   addDataToCart(
//                     key.id,
//                     key.name,
//                     key.model,
//                     key.brand,
//                     key.OS,
//                     key.price,
//                     key.img,
//                     key.description
//                   );
//                 }}
//               >
//                 Add to Cart
//               </Button>
//               <Button variant="outline-primary" style={{marginLeft:'10px'}} onClick={()=>{checkOut(key.id)}}>Buy Now</Button>
//             </div>
//           </div>
//           <br />
//         </Container>
//       </>
//     );
//   });

//   return (
//     <>
//       <div id="header">
//         <h1>Our Products !!</h1>
//       </div>
//       <div style={{
//         display:'flex',
//         alignItems:'center',
//         justifyContent:'center',
//         width:'100%',
//         padding:'5px 0px 40px 0px',
//         fontWeight:'bold',
//         gap:'10px',
//         fontSize:'18px',
//         color:'#183961'
//         }}>
//       <Nav.Link as={Link} to="#">All Products</Nav.Link> |
//       <Nav.Link href="#">Premium Products</Nav.Link>
//       </div>
//       <div id="product">{res}</div>
//       {/* Up Down page */}
//       <div id="updown">
//             <Nav.Link href="#header"><i class="fa-solid fa-circle-up"></i></Nav.Link>
//         </div>
//     </>
//   );
// };
// export default Products;

const Products = () =>{
  return (
    <>
      <div style={{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        padding:'40px 0px 30px 0px',
        fontWeight:'bold',
        gap:'10px',
        fontSize:'20px',
        color:'#183961'
        }}>
      <Nav.Link as={Link} to="allproducts">All Products</Nav.Link> |
      <Nav.Link as={Link} to="premiumproducts">Premium Products </Nav.Link>
      </div>
      <hr />
    <div>
      <Outlet/>
    </div>
    </>
  )
}
export default Products;