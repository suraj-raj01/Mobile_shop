import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Container, Nav } from "react-bootstrap";

import { useDispatch } from "react-redux";
import { addCartData } from "../addToCartSlice";
import { useNavigate } from "react-router-dom";

const MaleWatch = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [mydata, setMydata] = useState([]);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(false);
    }, 1000);
    setIsVisible(true);
  }, []);

  const loadData = () => {
    let api = `http://localhost:3000/products/?brand=watch`;
    axios.get(api).then((res) => {
      setMydata(res.data);
    });
  };
  useEffect(() => {
    loadData();
  }, []);

  const addDataToCart = (id, name, model, brand, OS, price, img,gender, desc) => {
    dispatch(
      addCartData({
        id: id,
        name: name,
        model: model,
        brand: brand,
        OS: OS,
        price: price,
        img: img,
        gender:gender,
        description: desc,
        qnty: 1,
      })
    );
  };

  const detail = (id) => {
    navigate(`/details/${id}`);
  };
  const checkOut = (id) => {
    navigate(`/checkout/${id}`);
  };
  const res = mydata.map((key) => {
    const rating = Math.floor(Math.random() * 1000) + 50;
    console.log(key.gender)
    if(key.gender.localeCompare("male")==0){
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
                <img
                  src={key.img}
                  alt=""
                  width="300px"
                  height="300px"
                  onClick={() => {
                    detail(key.id);
                  }}
                />
              </div>
              <div id="box2">
                <h3>{key.name}</h3>
                <b>{key.description}</b>
                <br />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "start",
                    gap: "2px",
                    padding: "10px 0px",
                    color: "goldenrod",
                  }}
                >
                  <span
                    style={{
                      padding: "1px 10px 0px 0px",
                      fontWeight: "bold",
                      fontSize: "14px",
                      color: "black",
                    }}
                  >
                    3.5
                  </span>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-regular fa-star-half-stroke"></i>
                  <i class="fa-regular fa-star"></i>
                  <span
                    style={{
                      padding: "1px 0px 0px 10px",
                      fontSize: "14px",
                      color: "black",
                      textTransform: "lowercase",
                      color: "#183961",
                    }}
                  >
                    {rating} ratings
                  </span>
                </div>
                <span>Model : {key.model}</span>
                <br />
                <span>Brand : {key.brand}</span>
                <br />
                <span>Watch for : {key.gender}</span>
                <br />
                <span>OS : {key.OS}</span>
                <br />
                <span>
                  Price : {key.price}
                  {" ₹"}
                </span>
                <br />
                <br />
                <Button
                  variant="outline-primary"
                  onClick={() => {
                    addDataToCart(
                      key.id,
                      key.name,
                      key.model,
                      key.brand,
                      key.OS,
                      key.price,
                      key.img,
                      key.gender,
                      key.description
                    );
                  }}
                >
                  Add to Cart
                </Button>
                <Button
                  variant="outline-primary"
                  style={{ marginLeft: "10px" }}
                  onClick={() => {
                    checkOut(key.id);
                  }}
                >
                  Buy Now
                </Button>
              </div>
            </div>
            <br />
          </Container>
        </>
      );
    }
  });

  return (
    <>
      <div id="header">
        <h1>Men Watches</h1>
      </div>
      {isVisible ? (
        <center>
          <img
            src="https://ima.alfatango.org/images/loader.gif"
            alt=""
            height="60px"
            width="60px"
          />
        </center>
      ) : (
        <div id="product">{res}</div>
      )}
      <div id="updown">
            <Nav.Link href="#header"><i class="fa-solid fa-angles-up fa-xl"></i></Nav.Link>
        </div>
    </>
  );
};
export default MaleWatch;
