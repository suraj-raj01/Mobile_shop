import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Container, Nav } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Colors from "../Components/Colors.jsx"

import { useDispatch } from "react-redux";
import { addCartData } from "../addToCartSlice";
import { useNavigate } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import Countdown from "react-countdown";

const Offer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [mydata, setMydata] = useState([]);
  const [offers, setOffers] = useState("");
  const [offerData, setOfferData] = useState([]);
  const [isVisible, setIsVisible] = useState(true);

  const loadData = () => {
    let api = "http://localhost:3000/products/?offers=yes";
    axios.get(api).then((res) => {
      setMydata(res.data);
    });
    setIsVisible(true);
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

  const detail = (id) => {
    navigate(`/details/${id}`);
  };
  const checkOut = (id) => {
    navigate(`/checkout/${id}`);
  };
  const res = mydata.map((key) => {
    let newPrice = key.price - ((key.price * key.discount) / 100).toFixed(0);
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
              justifyContent: "space-between",
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
              <br />
              <span>Model : {key.model}</span>
              <br />
              <span>Brand : {key.brand}</span>
              <br />
              <span>OS : {key.OS}</span>
              <br />
              <span
                style={{
                  color: "red",
                  textDecoration: "line-through",
                  fontWeight: "bold",
                }}
              >
                Price : {key.price}
                {".00 ₹"}
              </span>
              <br />
              <span style={{ color: "#183961", fontWeight: "bold" }}>
                Discount : {key.discount}
                {" %"}
              </span>
              <br />
              <span style={{ color: "#183961", fontWeight: "bold" }}>
                New Price : {newPrice}
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
  });

  const handleOffers = () => {
    let url = "http://localhost:3000/products";
    axios.get(url).then((res) => {
      setOfferData(res.data);
    });
    setIsVisible(false);
  };

  const res1 = offerData.map((key) => {
    let newPrice = key.price - ((key.price * key.discount) / 100).toFixed(0);
    if (offers == 10) {
      if (key.discount > 0 && key.discount <= 10) {
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
                  justifyContent: "space-between",
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
                  <br />
                  <span>Model : {key.model}</span>
                  <br />
                  <span>Brand : {key.brand}</span>
                  <br />
                  <span>OS : {key.OS}</span>
                  <br />
                  <span
                    style={{
                      color: "red",
                      textDecoration: "line-through",
                      fontWeight: "bold",
                    }}
                  >
                    Price : {key.price}
                    {".00 ₹"}
                  </span>
                  <br />
                  <span style={{ color: "#183961", fontWeight: "bold" }}>
                    Discount : {key.discount}
                    {" %"}
                  </span>
                  <br />
                  <span style={{ color: "#183961", fontWeight: "bold" }}>
                    New Price : {newPrice}
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
    }

    if (offers == 15) {
      let newPrice = key.price - ((key.price * key.discount) / 100).toFixed(0);
      if (key.discount > 10 && key.discount <= 15) {
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
                  justifyContent: "space-between",
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
                  <br />
                  <span>Model : {key.model}</span>
                  <br />
                  <span>Brand : {key.brand}</span>
                  <br />
                  <span>OS : {key.OS}</span>
                  <br />
                  <span
                    style={{
                      color: "red",
                      textDecoration: "line-through",
                      fontWeight: "bold",
                    }}
                  >
                    Price : {key.price}
                    {".00 ₹"}
                  </span>
                  <br />
                  <span style={{ color: "#183961", fontWeight: "bold" }}>
                    Discount : {key.discount}
                    {" %"}
                  </span>
                  <br />
                  <span style={{ color: "#183961", fontWeight: "bold" }}>
                    New Price : {newPrice}
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
    }

    if (offers == 20) {
      let newPrice = key.price - ((key.price * key.discount) / 100).toFixed(0);
      if (key.discount > 15 && key.discount <= 20) {
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
                  justifyContent: "space-between",
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
                  <br />
                  <span>Model : {key.model}</span>
                  <br />
                  <span>Brand : {key.brand}</span>
                  <br />
                  <span>OS : {key.OS}</span>
                  <br />
                  <span
                    style={{
                      color: "red",
                      textDecoration: "line-through",
                      fontWeight: "bold",
                    }}
                  >
                    Price : {key.price}
                    {".00 ₹"}
                  </span>
                  <br />
                  <span style={{ color: "#183961", fontWeight: "bold" }}>
                    Discount : {key.discount}
                    {" %"}
                  </span>
                  <br />
                  <span style={{ color: "#183961", fontWeight: "bold" }}>
                    New Price : {newPrice}
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
    }

    if (offers == 25) {
      let newPrice = key.price - ((key.price * key.discount) / 100).toFixed(0);
      if (key.discount > 20 && key.discount <= 25) {
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
                  justifyContent: "space-between",
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
                  <br />
                  <span>Model : {key.model}</span>
                  <br />
                  <span>Brand : {key.brand}</span>
                  <br />
                  <span>OS : {key.OS}</span>
                  <br />
                  <span
                    style={{
                      color: "red",
                      textDecoration: "line-through",
                      fontWeight: "bold",
                    }}
                  >
                    Price : {key.price}
                    {".00 ₹"}
                  </span>
                  <br />
                  <span style={{ color: "#183961", fontWeight: "bold" }}>
                    Discount : {key.discount}
                    {" %"}
                  </span>
                  <br />
                  <span style={{ color: "#183961", fontWeight: "bold" }}>
                    New Price : {newPrice}
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
    }

    if (offers == 30) {
      let newPrice = key.price - ((key.price * key.discount) / 100).toFixed(0);
      if (key.discount > 25 && key.discount <= 30) {
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
                  justifyContent: "space-between",
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
                  <br />
                  <span>Model : {key.model}</span>
                  <br />
                  <span>Brand : {key.brand}</span>
                  <br />
                  <span>OS : {key.OS}</span>
                  <br />
                  <span
                    style={{
                      color: "red",
                      textDecoration: "line-through",
                      fontWeight: "bold",
                    }}
                  >
                    Price : {key.price}
                    {".00 ₹"}
                  </span>
                  <br />
                  <span style={{ color: "#183961", fontWeight: "bold" }}>
                    Discount : {key.discount}
                    {" %"}
                  </span>
                  <br />
                  <span style={{ color: "#183961", fontWeight: "bold" }}>
                    New Price : {newPrice}
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
    }

    if (offers == 40) {
      let newPrice = key.price - ((key.price * key.discount) / 100).toFixed(0);
      if (key.discount > 0) {
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
                  justifyContent: "space-between",
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
                  <br />
                  <span>Model : {key.model}</span>
                  <br />
                  <span>Brand : {key.brand}</span>
                  <br />
                  <span>OS : {key.OS}</span>
                  <br />
                  <span
                    style={{
                      color: "red",
                      textDecoration: "line-through",
                      fontWeight: "bold",
                    }}
                  >
                    Price : {key.price}
                    {".00 ₹"}
                  </span>
                  <br />
                  <span style={{ color: "#183961", fontWeight: "bold" }}>
                    Discount : {key.discount}
                    {" %"}
                  </span>
                  <br />
                  <span style={{ color: "#183961", fontWeight: "bold" }}>
                    New Price : {newPrice}
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
    }
  });

  return (
    <>
      <div id="header">
        <h1>Today's Best Offers!!</h1>
      </div>
      <div id="offers">
        <div id="offer-opt">
          <Accordion defaultActiveKey="1">
            <Accordion.Item eventKey="1">
              <Accordion.Header>See Offers</Accordion.Header>
              <Accordion.Body>
                <div id="search-opt">
                  {/* <p>Offers</p> */}
                  <div id="search">
                    <Form.Check
                      type="radio"
                      name="nm"
                      value="40"
                      onChange={(e) => setOffers(e.target.value)}
                      aria-label="radio 1"
                    />
                    <span>See all Offers</span>{" "}
                  </div>
                  <div id="search">
                    <Form.Check
                      type="radio"
                      name="nm"
                      value="10"
                      onChange={(e) => setOffers(e.target.value)}
                      aria-label="radio 1"
                    />
                    <span>10% Off or more</span>{" "}
                  </div>
                  <div id="search">
                    <Form.Check
                      type="radio"
                      name="nm"
                      value="15"
                      onChange={(e) => setOffers(e.target.value)}
                      aria-label="radio 1"
                    />
                    <span>15% Off or more</span>{" "}
                  </div>
                  <div id="search">
                    <Form.Check
                      type="radio"
                      name="nm"
                      value="20"
                      onChange={(e) => setOffers(e.target.value)}
                      aria-label="radio 1"
                    />
                    <span>20% Off or more</span>{" "}
                  </div>
                  <div id="search">
                    <Form.Check
                      type="radio"
                      name="nm"
                      value="25"
                      onChange={(e) => setOffers(e.target.value)}
                      aria-label="radio 1"
                    />
                    <span>25% Off or more</span>{" "}
                  </div>
                  <div id="search">
                    <Form.Check
                      type="radio"
                      name="nm"
                      value="30"
                      onChange={(e) => setOffers(e.target.value)}
                      aria-label="radio 1"
                    />
                    <span>30% Off or more</span>{" "}
                  </div>
                  <br />
                  <button id="search-btn" onClick={handleOffers}>
                    Search
                  </button>
                  <br />
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Search by Color</Accordion.Header>
              <Accordion.Body>
                  <Colors/>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <br />
          <div id="offer_time">
            <h5>Offer'll expire in {<spant><Countdown date={Date.now() + 10000000}/></spant>}</h5>
        <h3></h3>
      </div>
        </div>
        {isVisible ? (
          <div id="product">{res}</div>
        ) : (
          <div id="product">{res1}</div>
        )}
      </div>

      <div id="updown">
            <Nav.Link href="#header"><i class="fa-solid fa-angles-up fa-xl"></i></Nav.Link>
        </div>

    </>
  );
};
export default Offer;
