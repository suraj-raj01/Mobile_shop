import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";

import { useDispatch } from "react-redux";
import { addCartData } from "../addToCartSlice";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import Accordion from "react-bootstrap/Accordion";

const Details = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [mydata, setMydata] = useState([]);
  const { id } = useParams();

  const loadData = () => {
    let api = `http://localhost:3000/products/?id=${id}`;
    axios.get(api).then((res) => {
      setMydata(res.data);
    });
  };
  useEffect(() => {
    loadData();
  }, []);

  const addDataToCart = (id, name, model, brand, OS, price, img, desc) => {
    dispatch(
      addCartData({
        id: id,
        name: name,
        model: model,
        brand: brand,
        OS: OS,
        price: price,
        img: img,
        description: desc,
        qnty: 1,
      })
    );
  };

  const showImg1 = (img1) => {
    let im = document.getElementById("orgImg");
    im.src = img1;
  };
  const showImg2 = (img2) => {
    let im = document.getElementById("orgImg");
    im.src = img2;
  };
  const showImg3 = (img) => {
    let im = document.getElementById("orgImg");
    im.src = img;
  };

  const checkOut = (id) => {
    navigate(`/checkout/${id}`);
  };

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
              justifyContent:'space-between'
            }}
          >
            <div id="box1">
              <img
                id="orgImg"
                src={key.img}
                alt=""
                width="400px"
                height="400px"
              />
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

              <div id="imgOpt">
                <div id="imgbox">
                  <img
                    src={key.img1}
                    onMouseEnter={() => {
                      showImg1(key.img1);
                    }}
                    alt="error!"
                    height="50px"
                    width="55px"
                    style={{ padding: "0px 5px" ,textTransform:'lowercase',color:'red'}}
                  />
                </div>

                <div id="imgbox">
                  <img
                    src={key.img2}
                    onMouseEnter={() => {
                      showImg2(key.img2);
                    }}
                    alt="error!"
                    height="50px"
                    width="55px"
                    style={{ padding: "0px 5px" ,textTransform:'lowercase',color:'red'}}
                  />
                </div>

                <div id="imgbox">
                  <img
                    src={key.img}
                    onMouseEnter={() => {
                      showImg3(key.img);
                    }}
                    alt=""
                    height="50px"
                    width="55px"
                    style={{ padding: "0px 5px" }}
                  />
                </div>
              </div>
              
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
              <div>
              </div>
            </div>
          </div>
          <br />
        </Container>
      </>
    );
  });
  return (
    <>
      <div id="header">
        <h1>Product Details</h1>
      </div>
      <div id="product">{res}</div>
    </>
  );
};
export default Details;
