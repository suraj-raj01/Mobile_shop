import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";

import { useDispatch } from "react-redux";
import { addCartData } from "../addToCartSlice";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import Accordion from "react-bootstrap/Accordion";

import { Flex, Rate } from "antd";
const desc = ["terrible", "bad", "normal", "good", "wonderful"];

const Details = () => {
  const [value, setValue] = useState(3);
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
  
  const [showimage,setShowImage] = useState(0);

  const showImg1 = (img1) => {
    let im = document.getElementById("orgImg");
    im.src = img1;
    setShowImage(1)
  };
  const showImg2 = (img2) => {
    let im = document.getElementById("orgImg");
    im.src = img2;
    setShowImage(2)
  };
  const showImg3 = (img) => {
    let im = document.getElementById("orgImg");
    im.src = img;
    setShowImage(3)
  };

  const showBigImg = (img1,img2,img) =>{
    let bigImg = document.getElementById("bigimg");
    if(showimage==1){
      bigImg.src = img1;
    }
    else if(showimage==2){
      bigImg.src = img2;
    }
    else if(showimage==3){
      bigImg.src = img;
    }
    else{
      bigImg.src = img;
    }
    document.getElementById("bigimg").style.display="block"
  }
  const hideBigImg = () =>{
    document.getElementById("bigimg").style.display="none"
  }


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
            <div id="box1" onMouseOver={()=>{showBigImg(key.img1,key.img2,key.img)}} onMouseLeave={hideBigImg}>
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
              <Flex gap="middle" vertical>
                <div style={{
                  display:'flex',
                  gap:'15px',
                  padding:'10px 0px'
                }}>
                <Rate tooltips={desc} onChange={setValue} value={value} />
                {value ? <span style={{fontWeight:'bold'}}>{desc[value - 1]}</span> : null}
                </div>
              </Flex>
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
          <img id="bigimg" src={key.img3} alt="" />
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
