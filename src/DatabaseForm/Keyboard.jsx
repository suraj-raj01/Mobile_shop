import { message } from "antd";
import axios from "axios";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useNavigate } from "react-router-dom";
const Keyboard = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({});
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = () => {
    let url = "http://localhost:3000/products";
    axios.post(url, input).then((res) => {
      message.success("data saved successfully!!");
      console.log(res.data);
      navigate("/adddata");
      setInput("");
    });
  };
  const gotohome =()=>{
    navigate("/home")
  }
  const clearData = () =>{
    navigate("/adddata")
  }
  return (
    <>
      <div id="header">
        <h1>Keyboard data insert form</h1>
      </div>
      <div id="dataInsert">
        <Form id="form">
          {/* <h3>Database insert Form</h3> */}
          <div id="box1">
            <br />
            <br />
            <InputGroup className="mb-3">
              <Form.Control
                required
                placeholder="Keyboard name"
                aria-describedby="basic-addon1"
                onChange={handleInput}
                name="name"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <Form.Control
                required
                placeholder="brand"
                aria-describedby="basic-addon1"
                onChange={handleInput}
                name="brand"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <Form.Control
                required
                placeholder="Model"
                aria-describedby="basic-addon1"
                onChange={handleInput}
                name="model"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <Form.Control
                required
                type="number"
                placeholder="price"
                aria-describedby="basic-addon1"
                onChange={handleInput}
                name="price"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <Form.Control
                required
                placeholder="img"
                aria-describedby="basic-addon1"
                  onChange={handleInput}
                name="img"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <Form.Control
                required
                placeholder="img1"
                aria-describedby="basic-addon1"
                onChange={handleInput}
                name="img1"
              />
            </InputGroup>
            <br />
          </div>

          <div id="box2">
            <InputGroup className="mb-3">
              <Form.Control
                required
                placeholder="img2"
                aria-describedby="basic-addon1"
                onChange={handleInput}
                name="img2"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <Form.Control
                required
                placeholder="Connectivity"
                aria-describedby="basic-addon1"
                onChange={handleInput}
                name="connectivity"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <Form.Control
                required
                placeholder="description"
                aria-describedby="basic-addon1"
                onChange={handleInput}
                name="description"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <Form.Control
                required
                placeholder="offers"
                aria-describedby="basic-addon1"
                onChange={handleInput}
                name="offers"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <Form.Control
                required
                placeholder="discount"
                aria-describedby="basic-addon1"
                onChange={handleInput}
                name="discount"
              />
            </InputGroup>
          </div>
        </Form>
        <div
          id="adddata-btn"
          style={{
            padding: "10px 2px",
            marginTop: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap:'20px'
          }}
        >
          <Button
            style={{ textTransform: "capitalize" }}
            variant="outline-primary"
            onClick={gotohome}
          >
             Go To Home
          </Button>
          <Button
            style={{ textTransform: "capitalize" }}
            variant="outline-primary"
            onClick={clearData}
          >
            Clear Data
          </Button>
          <Button
            style={{ textTransform: "capitalize" }}
            onClick={handleSubmit}
            variant="outline-primary"
          >
            Submit Data
          </Button>
        </div>
        <br />
      </div>
    </>
  );
};
export default Keyboard;
