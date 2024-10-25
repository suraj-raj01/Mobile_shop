import { message } from "antd";
import axios from "axios";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
const Mobile = () =>{
    return(
        <>
        <div id="header">
            <h1>Mobile data insert form</h1>
        </div>
        <div id="dataInsert">
        <Form>
          <br />
          {/* <h3>Database insert Form</h3> */}
          {/* <br /> */}
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Mobile name"
              aria-describedby="basic-addon1"
              //   onChange={handleInput}
              name="name"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="model"
              aria-describedby="basic-addon1"
              //   onChange={handleInput}
              name="model"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="brand"
              aria-describedby="basic-addon1"
              //   onChange={handleInput}
              name="brand"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="OS"
              aria-describedby="basic-addon1"
              //   onChange={handleInput}
              name="OS"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="price"
              aria-describedby="basic-addon1"
              //   onChange={handleInput}
              name="price"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="img"
              aria-describedby="basic-addon1"
              //   onChange={handleInput}
              name="img"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="img1"
              aria-describedby="basic-addon1"
              //   onChange={handleInput}
              name="img1"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="img2"
              aria-describedby="basic-addon1"
              //   onChange={handleInput}
              name="img2"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="description"
              aria-describedby="basic-addon1"
              //   onChange={handleInput}
              name="description"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="offers"
              aria-describedby="basic-addon1"
              //   onChange={handleInput}
              name="offer"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="discount"
              aria-describedby="basic-addon1"
              //   onChange={handleInput}
              name="discount"
            />
          </InputGroup>
        </Form>
      </div>
        </>
    )
}
export default Mobile;