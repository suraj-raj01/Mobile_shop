import { message } from "antd";
import axios from "axios";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
const TV = () =>{
    return(
        <>
        <div id="header">
            <h1>TV data insert form</h1>
        </div>
        <div id="dataInsert">
        <Form>
          <br />
          <h3>Database insert Form</h3>
          <br />
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="enter name"
              aria-describedby="basic-addon1"
              //   onChange={handleInput}
              name="name"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="enter email"
              aria-describedby="basic-addon1"
              //   onChange={handleInput}
              name="email"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="phone number"
              aria-describedby="basic-addon1"
              //   onChange={handleInput}
              name="phone"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              type="password"
              placeholder="create password"
              aria-describedby="basic-addon1"
              //   onChange={handleInput}
              name="password"
            />
          </InputGroup>
        </Form>
      </div>
        </>
    )
}
export default TV;