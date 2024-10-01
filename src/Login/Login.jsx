import { message } from "antd";
import axios from "axios";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const register = () => {
    navigate("/register");
  };

  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  const handleLogin = () => {
    if (name == "") {
      message.error("please enter username!!!");
      return false;
    }
    if (pass == "") {
      message.error("Please enter password!!!");
    } else {
      let url = `http://localhost:3000/login/?username=${name}`;
      axios.get(url).then((res) => {
        if (res.data.length >= 1) {
          if (res.data[0].password == pass) {
            localStorage.setItem("username", res.data[0].name.toUpperCase());
            message.success(`Welcome ," ${res.data[0].name.toUpperCase()} "`);
            navigate("/dashboard")
          } else {
            message.error("Wrong Password!!");
          }
        } else {
          message.error("invalid username");
        }
      });
    }
  };

  return (
    <>
      <br />
      <br />
      <br />
      <div id="form">
        <Form style={{ width: "100%" }}>
          <br />
          <p>Login Page</p>
          <br />
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">
              <i class="fa-solid fa-user"></i>
            </InputGroup.Text>
            <Form.Control
              placeholder="username"
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">
              <i class="fa-solid fa-key"></i>
            </InputGroup.Text>
            <Form.Control
              type="password"
              placeholder="password"
              aria-label="Password"
              aria-describedby="basic-addon1"
              value={pass}
              onChange={(e) => {
                setPass(e.target.value);
              }}
            />
          </InputGroup>
          <div id="forgot">
            <span>Forgot password</span>
          </div>
          <br />
        </Form>
        <button id="login-btn" onClick={handleLogin}>
          Login
        </button>
        <button id="login-btn" onClick={register}>
          Don't have an account
        </button>
        <br />
        <br />
      </div>
      <br />
      <br />
      <br />
    </>
  );
};
export default Login;
