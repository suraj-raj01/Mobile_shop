import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const navigate = useNavigate();
    const register = () =>{
        navigate("/register")
    }
  return (
    <>
    <br />
    <br />
    <br />
    <div id="form">
    <Form>
        <br />
        <p>Login Page</p>
        <br />
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1"><i class="fa-solid fa-user"></i></InputGroup.Text>
        <Form.Control
          placeholder="username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1"><i class="fa-solid fa-key"></i></InputGroup.Text>
        <Form.Control
          placeholder="password"
          aria-label="Password"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <div id="forgot"><span>Forgot password</span></div>
      <br />
      <button id="login-btn">Login</button>
      <button id="login-btn" onClick={register}>Don't have an account</button>
      </Form>
      <br /><br />
    </div>
    <br /><br /><br />
    </>
  );
};
export default Login;
