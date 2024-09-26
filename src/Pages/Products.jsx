import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";

import { useDispatch } from "react-redux";
import {addCartData} from "../addToCartSlice";
import { useNavigate } from "react-router-dom";

const Products = () =>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [mydata, setMydata] = useState([]);
  
    const loadData = () => {
      let api = "http://localhost:3000/products";
      axios.get(api).then((res) => {
        setMydata(res.data);
      });
    };
    useEffect(() => {
      loadData();
    }, []);
  
    const addDataToCart = (id,name,model,brand,OS,price,img,desc) =>{
      dispatch(
        addCartData({
          id:id,
          name:name,
          model:model,
          brand:brand,
          OS:OS,
          price:price,
          img:img,
          description:desc,
          qnty:1
        })
      );
    };
  
    const detail = (id) =>{
      navigate(`/details/${id}`)
    }
    const res = mydata.map((key) => {
      return (
        <>
          <Container>
            <div
              id="products"
              style={{
                display: "flex",
                padding: "20px",
                width: "100%",
                alignItems: "center",
              }}
            >
              <div id="box1">
                <img src={key.img} alt="" width="300px" height="300px" onClick={()=>{detail(key.id)}}/>
              </div>
              <div id="box2">
                <h3>{key.name}</h3>
                <b>{key.description}</b>
                <br />
                <br />
                <span>Model : {key.model}</span>
                <br />
                <span>Brand : {key.brand}</span>
                <br />
                <span>OS : {key.OS}</span>
                <br />
                <span>
                  Price : {key.price}
                  {".00 ₹"}
                </span>
                <br />
                <br />
                <Button variant="outline-primary"
                onClick={()=>{
                  addDataToCart(
                    key.id,
                    key.name,
                    key.model,
                    key.brand,
                    key.OS,
                    key.price,
                    key.img,
                    key.description
                  )
                }}
                >Add to Cart</Button>
              </div>
            </div>
            <br />
          </Container>
        </>
      );
    });

    return(
        <>
        <div id="header">
            <h1>Our Premium Products!!</h1>
        </div>
        <div id="product">{res}</div>
        </>
    )
}
export default Products;