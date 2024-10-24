import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";

import Carousel from "react-bootstrap/Carousel";
import { useDispatch } from "react-redux";
import { addCartData } from "../addToCartSlice";
import { useNavigate } from "react-router-dom";
import CustomerReview from "../Components/CustomerReview";
import Colors from "../Components/Colors";
import Accordion from "react-bootstrap/Accordion";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [mydata, setMydata] = useState([]);
  const [catVal, setCatVal] = useState("");
  const [myprice, setPrice] = useState("");
  const [priceData, setPriceData] = useState([]);
  const [isVisible, setIsVisible] = useState(true);
  const [offers, setOffers] = useState("");
  const [offerData, setOfferData] = useState([]);

  const loadData = () => {
    let api = "http://localhost:3000/products";
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

  const detail = (id) => {
    navigate(`/details/${id}`);
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
              justifyContent: "space-between",
            }}
          >
            <div id="home-box1">
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
                  4.5
                </span>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star-half-stroke"></i>
                <span
                  style={{
                    padding: "1px 0px 0px 10px",
                    fontSize: "14px",
                    color: "black",
                    textTransform: "lowercase",
                    color: "#183961",
                  }}
                >
                  2,541 ratings
                </span>
              </div>
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
            </div>
          </div>
          <br />
        </Container>
      </>
    );
  });

  const catValHandle = () => {
    let api = `http://localhost:3000/products/?brand=${catVal}`;
    axios.get(api).then((res) => {
      setMydata(res.data);
    });
    setIsVisible(true);
  };

  const handlePrice = () => {
    let api = "http://localhost:3000/products";
    axios.get(api).then((res) => {
      setPriceData(res.data);
    });
    setIsVisible(false);
  };

  const handleOffer = () => {
    let api = "http://localhost:3000/products";
    axios.get(api).then((res) => {
      setOfferData(res.data);
    });
    setIsVisible(false);
  };
  const res1 = priceData.map((key) => {
    if (myprice == 10000) {
      if (key.price > 0 && key.price <= 10000) {
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
                <div id="home-box1">
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
                  <span>
                    Price : {key.price}
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
                        key.price,
                        key.img,
                        key.description
                      );
                    }}
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
              <br />
            </Container>
          </>
        );
      }
    }

    if (myprice == 20000) {
      if (key.price > 10000 && key.price <= 20000) {
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
                <div id="home-box1">
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
                  <span>
                    Price : {key.price}
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
                        key.price,
                        key.img,
                        key.description
                      );
                    }}
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
              <br />
            </Container>
          </>
        );
      }
    }

    if (myprice == 30000) {
      if (key.price > 20000 && key.price <= 30000) {
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
                <div id="home-box1">
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
                  <div style={{ padding: "15px 0px" }}>{key.stars}</div>
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
                </div>
              </div>
              <br />
            </Container>
          </>
        );
      }
    }

    if (myprice == 40000) {
      if (key.price > 30000 && key.price <= 40000) {
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
                <div id="home-box1">
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
                  <span>
                    Price : {key.price}
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
                        key.price,
                        key.img,
                        key.description
                      );
                    }}
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
              <br />
            </Container>
          </>
        );
      }
    }

    if (myprice == 50000) {
      if (key.price > 40000 && key.price <= 50000) {
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
                <div id="home-box1">
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
                  <span>
                    Price : {key.price}
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
                        key.price,
                        key.img,
                        key.description
                      );
                    }}
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
              <br />
            </Container>
          </>
        );
      }
    }

    if (myprice == 60000) {
      if (key.price > 50000 && key.price <= 60000) {
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
                <div id="home-box1">
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
                  <span>
                    Price : {key.price}
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
                        key.price,
                        key.img,
                        key.description
                      );
                    }}
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
              <br />
            </Container>
          </>
        );
      }
    }
    if (myprice == 70000) {
      if (key.price > 60000) {
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
                <div id="home-box1">
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
                  <span>
                    Price : {key.price}
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
                        key.price,
                        key.img,
                        key.description
                      );
                    }}
                  >
                    Add to Cart
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
      <div id="crousel">
        <Carousel fade>
          <Carousel.Item>
            <img
              src="https://www.top10mobileshop.com/images/top10mobiles.com/slider/794559998202404261240.jpg "
              alt=""
              width="100%"
              height="400px"
            />
            <Carousel.Caption>
              <h3>V30 | Vivo 30 Pro</h3>
              <p>Delight every Moments</p>
              <Button variant="outline-primary">Info →</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://media.product.which.co.uk/prod/images/ar_2to1_1500x750/22a475e555d7-best-laptop-deals.jpg"
              alt=""
              width="100%"
              height="400px"
            />
            <Carousel.Caption>
              <h3 style={{ color: "black" }}></h3>
              <p style={{ color: "black" }}></p>
              <Button variant="outline-primary">Info →</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://www.top10mobileshop.com/images/top10mobiles.com/slider/270514103202408151136.jpg"
              alt=""
              width="100%"
              height="400px"
            />
            <Carousel.Caption>
              <h3 style={{ color: "black" }}>Reno 12 Pro 5G</h3>
              <p style={{ color: "black" }}>Your every day AI companion</p>
              <Button variant="outline-primary">Info →</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://www.nicepng.com/png/detail/278-2782290_led-tvs-led-24-inch.png"
              alt=""
              width="100%"
              height="400px"
            />
            <Carousel.Caption>
              <h3 style={{ color: "black" }}></h3>
              <p style={{ color: "black" }}></p>
              <Button variant="outline-primary">Info →</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://assets2.razerzone.com/images/pnx.assets/7fb8deac5d3c73e360bc687ed62be6cf/gaming-laptops-og-image.webp"
              alt=""
              width="100%"
              height="400px"
            />
            <Carousel.Caption>
              <h3 style={{ color: "black" }}></h3>
              <p style={{ color: "black" }}></p>
              <Button variant="outline-primary">Info →</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://www.top10mobileshop.com/images/top10mobiles.com/slider/747523986202408151132.jpg"
              alt=""
              width="100%"
              height="400px"
            />
            <Carousel.Caption>
              <h3 style={{ color: "black" }}>Vivo V40 | Vivo V40 Pro</h3>
              <p style={{ color: "black" }}>ZEISS Portrait SO Pro</p>
              <Button variant="outline-primary">Info →</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item >
            <img
              src="https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_14-16-inch_10182021_big.jpg.slideshow-xlarge_2x.jpg"
              alt=""
              width="100%"
              height="450px"
            />
            <Carousel.Caption>
            <h3 style={{ color: "black" }}></h3>
              <p style={{ color: "black" }}></p>
              <Button variant="outline-primary">Info →</Button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div id="items">
        <h4>
          "Welcome To Mobileshop.com" Buy Mobile Online | Best Prices, Top
          Brands Premium Mobiles | Gaming, Business, & More Discover Your
          Perfect Mobile
        </h4>
      </div>
      <div id="homepage">
        <div id="search-opt">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header> <span style={{fontWeight:'bold'}}>Filter by Price</span> </Accordion.Header>
              <Accordion.Body>
                <div id="search">
                  <span>10000 & below</span>{" "}
                  <Form.Check
                    value="10000"
                    onChange={(e) => {
                      setPrice(e.target.value);
                    }}
                    type="radio"
                    name="nm"
                    aria-label="radio 1"
                  />
                </div>
                <div id="search">
                  <span>10000 - 20000</span>{" "}
                  <Form.Check
                    value="20000"
                    onChange={(e) => {
                      setPrice(e.target.value);
                    }}
                    type="radio"
                    name="nm"
                    aria-label="radio 1"
                  />
                </div>
                <div id="search">
                  <span>20000 - 30000</span>{" "}
                  <Form.Check
                    value="30000"
                    onChange={(e) => {
                      setPrice(e.target.value);
                    }}
                    type="radio"
                    name="nm"
                    aria-label="radio 1"
                  />
                </div>
                <div id="search">
                  <span>30000 - 40000</span>{" "}
                  <Form.Check
                    value="40000"
                    onChange={(e) => {
                      setPrice(e.target.value);
                    }}
                    type="radio"
                    name="nm"
                    aria-label="radio 1"
                  />
                </div>
                <div id="search">
                  <span>40000 - 50000</span>{" "}
                  <Form.Check
                    value="50000"
                    onChange={(e) => {
                      setPrice(e.target.value);
                    }}
                    type="radio"
                    name="nm"
                    aria-label="radio 1"
                  />
                </div>
                <div id="search">
                  <span>50000 - 60000</span>{" "}
                  <Form.Check
                    value="60000"
                    onChange={(e) => {
                      setPrice(e.target.value);
                    }}
                    type="radio"
                    name="nm"
                    aria-label="radio 1"
                  />
                </div>
                <div id="search">
                  <span>60000 & above</span>{" "}
                  <Form.Check
                    value="70000"
                    onChange={(e) => {
                      setPrice(e.target.value);
                    }}
                    type="radio"
                    name="nm"
                    aria-label="radio 1"
                  />
                </div>
                <br />
                <button id="search-btn" onClick={handlePrice}>
                  Search
                </button>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header><span style={{fontWeight:'bold'}}>Filter by Name</span></Accordion.Header>
              <Accordion.Body>
                <div id="search">
                  <span>Realme</span>{" "}
                  <Form.Check
                    value="realme"
                    onChange={(e) => {
                      setCatVal(e.target.value);
                    }}
                    type="radio"
                    name="nm"
                    aria-label="radio 1"
                  />
                </div>
                <div id="search">
                  <span>Redmi</span>{" "}
                  <Form.Check
                    value="Redmi"
                    onChange={(e) => {
                      setCatVal(e.target.value);
                    }}
                    type="radio"
                    name="nm"
                    aria-label="radio 1"
                  />
                </div>
                <div id="search">
                  <span>Oppo</span>{" "}
                  <Form.Check
                    value="Oppo"
                    onChange={(e) => {
                      setCatVal(e.target.value);
                    }}
                    type="radio"
                    name="nm"
                    aria-label="radio 1"
                  />
                </div>
                <div id="search">
                  <span>Motorola</span>{" "}
                  <Form.Check
                    value="Motorola"
                    onChange={(e) => {
                      setCatVal(e.target.value);
                    }}
                    type="radio"
                    name="nm"
                    aria-label="radio 1"
                  />
                </div>
                <div id="search">
                  <span>iPhone</span>{" "}
                  <Form.Check
                    value="Apple"
                    onChange={(e) => {
                      setCatVal(e.target.value);
                    }}
                    type="radio"
                    name="nm"
                    aria-label="radio 1"
                  />
                </div>
                <div id="search">
                  <span>IQOO</span>{" "}
                  <Form.Check
                    value="iQOO"
                    onChange={(e) => {
                      setCatVal(e.target.value);
                    }}
                    type="radio"
                    name="nm"
                    aria-label="radio 1"
                  />
                </div>
                <div id="search">
                  <span>Nothing</span>{" "}
                  <Form.Check
                    value="Nothing"
                    onChange={(e) => {
                      setCatVal(e.target.value);
                    }}
                    type="radio"
                    name="nm"
                    aria-label="radio 1"
                  />
                </div>
                <div id="search">
                  <span>Vivo</span>{" "}
                  <Form.Check
                    value="Vivo"
                    onChange={(e) => {
                      setCatVal(e.target.value);
                    }}
                    type="radio"
                    name="nm"
                    aria-label="radio 1"
                  />
                </div>
                <div id="search">
                  <span>Oneplus</span>{" "}
                  <Form.Check
                    value="OnePlus"
                    onChange={(e) => {
                      setCatVal(e.target.value);
                    }}
                    type="radio"
                    name="nm"
                    aria-label="radio 1"
                  />
                </div>
                <div id="search">
                  <span>Nokia</span>{" "}
                  <Form.Check
                    value="Nokia"
                    onChange={(e) => {
                      setCatVal(e.target.value);
                    }}
                    type="radio"
                    name="nm"
                    aria-label="radio 1"
                  />
                </div>
                <div id="search">
                  <span>Google Pixel</span>{" "}
                  <Form.Check
                    value="Generic"
                    onChange={(e) => {
                      setCatVal(e.target.value);
                    }}
                    type="radio"
                    name="nm"
                    aria-label="radio 1"
                  />
                </div>
                <div id="search">
                  <span>Samsung</span>{" "}
                  <Form.Check
                    value="Samsung"
                    onChange={(e) => {
                      setCatVal(e.target.value);
                    }}
                    type="radio"
                    name="nm"
                    aria-label="radio 1"
                  />
                </div>
                    <br />
                <button id="search-btn" onClick={catValHandle}>
                  Search
                </button>
              </Accordion.Body>
            </Accordion.Item>
          {/* From CustomerReview Components */}

            <Accordion.Item eventKey="2">
              <Accordion.Header><span style={{fontWeight:'bold'}}>See Reviews</span></Accordion.Header>
              <Accordion.Body>
                <CustomerReview />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header><span style={{fontWeight:'bold'}}>See Offers</span></Accordion.Header>
              <Accordion.Body>
                <div id="search">
                  <Form.Check
                    type="radio"
                    name="nm"
                    value="10"
                    onChange={(e) => setOffers(e.target.value)}
                    aria-label="radio 1"
                  />
                  <span>See all Offers</span>{" "}
                </div>
                <div id="search">
                  <Form.Check
                    type="radio"
                    name="nm"
                    value="15"
                    onChange={(e) => setOffers(e.target.value)}
                    aria-label="radio 1"
                  />
                  <span>10% Off or more</span>{" "}
                </div>
                <div id="search">
                  <Form.Check
                    type="radio"
                    name="nm"
                    value="20"
                    onChange={(e) => setOffers(e.target.value)}
                    aria-label="radio 1"
                  />
                  <span>15% Off or more</span>{" "}
                </div>
                <div id="search">
                  <Form.Check
                    type="radio"
                    name="nm"
                    value="25"
                    onChange={(e) => setOffers(e.target.value)}
                    aria-label="radio 1"
                  />
                  <span>20% Off or more</span>{" "}
                </div>
                <div id="search">
                  <Form.Check
                    type="radio"
                    name="nm"
                    value="30"
                    onChange={(e) => setOffers(e.target.value)}
                    aria-label="radio 1"
                  />
                  <span>25% Off or more</span>{" "}
                </div>
                <div id="search">
                  <Form.Check
                    type="radio"
                    name="nm"
                    value="40"
                    onChange={(e) => setOffers(e.target.value)}
                    aria-label="radio 1"
                  />
                  <span>30% Off or more</span>{" "}
                </div>
                <br />
                <button id="search-btn" onClick={handleOffer}>
                  Search
                </button>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <br />
          {/* from color Components */}
          <p style={{fontWeight:'bold',color:'#183961'}}>Colors</p>
          <div id="Search">
            <div id="clr-box" style={{backgroundColor:'red'}}></div>
            <div id="clr-box" style={{backgroundColor:'grey'}}></div>
            <div id="clr-box" style={{backgroundColor:'pink'}}></div>
            <div id="clr-box" style={{backgroundColor:'blue'}}></div>
            <div id="clr-box" style={{backgroundColor:'orange'}}></div>
            <div id="clr-box" style={{backgroundColor:'skyblue'}}></div>
            <div id="clr-box" style={{backgroundColor:'black'}}></div>
            <div id="clr-box" style={{backgroundColor:'white'}}></div>
          </div>
          <br />
          <br />
        </div>
        {isVisible ? (
          <div id="home-product">{res}</div>
        ) : (
          <div id="home-product">{res1}</div>
        )}
      </div>
    </>
  );
};
export default Home;
