import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";

import { useDispatch } from "react-redux";
import { addCartData } from "../addToCartSlice";
import { useParams, useNavigate} from "react-router-dom";

const CheckOut = () => {
  const navigate =  useNavigate();
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

  const detail = (id) =>{
      navigate(`/details/${id}`)
  }

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

  const res = mydata.map((key) => {
    const newPrice = key.price - ((key.price * key.discount) / 100).toFixed(0);
    return (
      <>
        <Container>
          <div
            id="checkout-products"
          >
            <div id="box1">
              <img src={key.img} alt="" width="300px" height="300px" onClick={() => {
                      detail(key.id);
                    }}/>
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
              <h5>Select a Payment Method</h5>
              <br />
              <div id="opt">
                <span>Debit or Credit Card</span>{" "}
                <Form.Check type="radio" name="nm" aria-label="radio 1" />
              </div>
              <div id="opt">
                <span>New Banking</span>{" "}
                <Form.Check type="radio" name="nm" aria-label="radio 1" />
              </div>
              <Form.Select aria-label="Default select example" style={{marginTop:'5px'}}>
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
              </Form.Select>
              <div id="opt">
                <span>Other UPI Apps</span>{" "}
                <Form.Check type="radio" name="nm" aria-label="radio 1" />
              </div>
              <div id="opt">
                <span>EMI</span>{" "}
                <Form.Check type="radio" name="nm" aria-label="radio 1" />
              </div>
              <div id="opt">
                <span>Cash on Delivery</span>{" "}
                <Form.Check type="radio" name="nm" aria-label="radio 1" disabled/>
              </div>
              <button id="btn">Use this payment method</button>
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
        <h1>CheckOut</h1>
      </div>
      <div id="product">{res}</div>
    </>
  );
};
export default CheckOut;
