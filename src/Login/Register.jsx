import { message } from "antd";
import axios from "axios";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useNavigate } from "react-router-dom";
const Register = () => {
    const navigate = useNavigate();
    const login = () =>{
        navigate("/login")
    }

    const [input,setInput] = useState({});
    const handleInput=(e)=>{
        let name = e.target.name;
        let value = e.target.value;
        setInput(values=>({...values,[name]:value}))
    }


    const handleSubmit = () =>{
        let url = "http://localhost:3000/login";
        axios.post(url,input).then((res)=>{
          message.success("registration successfully!!");
          console.log(res.data);
          navigate("/login");
        })
    }
  return (
    <>
    <br />
    <br />
    <br />
    <div id="form">
    <Form style={{width:'100%'}}>
        <br />
        <p>Register Page</p>
        <br />
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1"><i class="fa-solid fa-user"></i></InputGroup.Text>
        <Form.Control
          placeholder="enter name"
          aria-describedby="basic-addon1"
          onChange={handleInput}
          name="name"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1"><i class="fa-solid fa-at"></i></InputGroup.Text>
        <Form.Control
          placeholder="enter email"
          aria-describedby="basic-addon1"
          onChange={handleInput}
          name="email"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1"><i class="fa-solid fa-phone-volume"></i></InputGroup.Text>
        <Form.Control
          placeholder="phone number"
          aria-describedby="basic-addon1"
          onChange={handleInput}
          name="phone"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1"><i class="fa-solid fa-key"></i></InputGroup.Text>
        <Form.Control
          placeholder="create password"
          aria-describedby="basic-addon1"
          onChange={handleInput}
          name="password"
        />
      </InputGroup>

      </Form>
      <button id="login-btn" onClick={handleSubmit}>Register</button>
      <button id="login-btn" onClick={login}>Already have an account</button>
      <br /><br />
    </div>
    <br /><br /><br />
    </>
  );
};
export default Register;
