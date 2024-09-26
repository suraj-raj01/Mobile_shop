import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";

import Carousel from "react-bootstrap/Carousel";
import { useDispatch } from "react-redux";
import { addCartData } from "../addToCartSlice";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [mydata, setMydata] = useState([]);
  const [catVal, setCatVal] = useState("");
  const [myprice, setPrice] = useState("");
  const [priceData, setPriceData] = useState([]);
  const [isVisible,setIsVisible] = useState(true);

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
              justifyContent:"space-between"
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
  });

  const catValHandle = () => {
    let api = `http://localhost:3000/products/?brand=${catVal}`;
    axios.get(api).then((res) => {
      setMydata(res.data);
    });
    setIsVisible(true)
  };

  const handlePrice = () => {
    let api = "http://localhost:3000/products";
    axios.get(api).then((res) => {
      setPriceData(res.data);
    });
    setIsVisible(false)
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
              src="https://www.top10mobileshop.com/images/top10mobiles.com/slider/270514103202408151136.jpg"
              alt=""
              width="100%"
              height="400px"
            />
            <Carousel.Caption>
              <h3 style={{color:'black'}}>Reno 12 Pro 5G</h3>
              <p style={{color:'black'}}>Your every day AI companion</p>
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
              <h3 style={{color:'black'}}>Vivo V40 | Vivo V40 Pro</h3>
              <p style={{color:'black'}}>
                ZEISS Portrait SO Pro
              </p>
              <Button variant="outline-primary">Info →</Button>
            </Carousel.Caption>
          </Carousel.Item>
         
        </Carousel>
      </div>
      <div id="items">
        <h4>"Welcome To Mobileshop.com" Buy Mobile Online | Best Prices, Top Brands Premium Mobiles | Gaming, Business, & More Discover Your Perfect Mobile</h4>
      </div>
      <div id="homepage">
        <div id="search-opt">
          <p>Filter By Price </p>
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
          <br />
          <br />
          <br />
          <p>Filter By Name </p>
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
        </div>
        {isVisible?(
          <div id="home-product">{res}</div>
        ):(
          <div id="home-product">{res1}</div>    
        )}
        
      </div>
    </>
  );
};
export default Home;
