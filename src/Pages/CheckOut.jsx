import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";

import { useDispatch } from "react-redux";
import { addCartData } from "../addToCartSlice";
import { useParams, useNavigate } from "react-router-dom";

const CheckOut = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [mydata, setMydata] = useState([]);
  const [payopt,setPayOpt] = useState("");
  const { id } = useParams();
  console.log(payopt)
  const loadData = () => {
    let api = `http://localhost:3000/products/?id=${id}`;
    axios.get(api).then((res) => {
      setMydata(res.data);
    });
  };
  useEffect(() => {
    loadData();
  }, []);

  const detail = (id) => {
    navigate(`/details/${id}`);
  };
  const handleSubmit = () => {
    navigate(`/payments/${payopt}`);
  };
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

  const [showimage,setShowImage]  = useState(0);
  const showImg1 = (img1) => {
    let im = document.getElementById("orgImg");
    im.src = img1;
    setShowImage(1);
  };
  const showImg2 = (img2) => {
    let im = document.getElementById("orgImg");
    im.src = img2;
    setShowImage(2);
  };
  const showImg3 = (img) => {
    let im = document.getElementById("orgImg");
    im.src = img;
    setShowImage(3);
  };
  const showBigImg = (img1,img2,img) => {
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
    document.getElementById("bigimg").style.display = "block";
  };
  const hideBigImg = () => {
    document.getElementById("bigimg").style.display = "none";
  };

  const res = mydata.map((key) => {
    const newPrice = key.price - ((key.price * key.discount) / 100).toFixed(0);
    return (
      <>
        <Container>
          <div id="checkout-products">
            <div id="checkout-img">
              <div id="imgbox">
                <img
                  src={key.img1}
                  onMouseEnter={() => {
                    showImg1(key.img1);
                  }}
                  alt="error!"
                  height="50px"
                  width="55px"
                  style={{ padding: "0px 5px", color: "red" }}
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
                  style={{ padding: "0px 5px", color: "red" }}
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

            <div
              id="box1"
              onMouseOver={() => {
                showBigImg(key.img1,key.img2,key.img);
              }}
              onMouseLeave={hideBigImg}
            >
              <img
                src={key.img}
                id="orgImg"
                alt=""
                width="320px"
                height="320px"
                onClick={() => {
                  detail(key.id);
                }}
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
                Price : {newPrice}
                {".00 ₹"}
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
                    newPrice,
                    key.img,
                    key.description
                  );
                }}
              >
                Add to Cart
              </Button>
            </div>
            <div id="checkout-payment">
              <Form>
                <h5>Select a Payment Method</h5>
                <br />
                <div id="opt">
                  <span>Debit or Credit Card</span>{" "}
                  <Form.Check
                    type="radio"
                    name="nm"
                    value="debit & credit"
                    onChange={(e) => {
                      setPayOpt(e.target.value);
                    }}
                    aria-label="radio 1"
                  />
                </div>
                <div id="opt">
                  <span>Net Banking</span>{" "}
                  <Form.Check type="radio"
                    name="nm"
                    value="netbanking"
                    onChange={(e) => {
                    setPayOpt(e.target.value);
                    }}
                    aria-label="radio 1" />
                </div>
                {/* <Form.Select
                  aria-label="Default select example"
                  style={{ marginTop: "5px" }}
                >
                  <option>Choose an Option</option>
                  <hr />
                  <option value="1">AXIS Bank</option>
                  <option value="2">BOB</option>
                  <option value="3">BOI</option>
                  <option value="4">Central Bank Of India</option>
                  <option value="5">HDFC</option>
                  <option value="6">India Bank</option>
                  <option value="7">IDFC</option>
                  <option value="8">IndusInd Bank</option>
                  <option value="9">Kotak Mahindra Bank</option>
                  <option value="10">Punjab National Bank</option>
                  <option value="11">SBI</option>
                </Form.Select> */}
                <div id="opt">
                  <span>Other UPI Apps</span>{" "}
                  <Form.Check   type="radio"
                   name="nm"
                   value="upi"
                   onChange={(e) => {
                   setPayOpt(e.target.value);
                   }}
                  aria-label="radio 1" />
                </div>
                <div id="opt">
                  <span>EMI</span>{" "}
                  <Form.Check   type="radio"
                   name="nm"
                   value="emi"
                   onChange={(e) => {
                   setPayOpt(e.target.value);
                   }}
                  aria-label="radio 1" />
                </div>
                <div id="opt">
                  <span style={{ color: "gray" }}>
                    Cash on Delivery <br /> uavailabe!! now
                  </span>{" "}
                  <Form.Check
                    type="radio"
                    name="nm"
                    aria-label="radio 1"
                    disabled
                  />
                </div>
                <button id="btn" onClick={handleSubmit}>
                  Use this payment method
                </button>
              </Form>
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
        <h1>CHECKOUT</h1>
      </div>
      <div id="product">{res}</div>
    </>
  );
};
export default CheckOut;
