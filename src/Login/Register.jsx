import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useNavigate } from "react-router-dom";
const Register = () => {
    const navigate = useNavigate();
    const login = () =>{
        navigate("/login")
    }
  return (
    <>
    <br />
    <br />
    <br />
    <div id="form">
    <Form>
        <br />
        <p>Register Page</p>
        <br />
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1"><i class="fa-solid fa-user"></i></InputGroup.Text>
        <Form.Control
          placeholder="enter name"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1"><i class="fa-solid fa-at"></i></InputGroup.Text>
        <Form.Control
          placeholder="enter email"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1"><i class="fa-solid fa-phone-volume"></i></InputGroup.Text>
        <Form.Control
          placeholder="phone number"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1"><i class="fa-solid fa-key"></i></InputGroup.Text>
        <Form.Control
          placeholder="create password"
          aria-describedby="basic-addon1"
        />
      </InputGroup>

      <button id="login-btn">Register</button>
      <button id="login-btn" onClick={login}>Already have an account</button>
      </Form>
      <br /><br />
    </div>
    <br /><br /><br />
    </>
  );
};
export default Register;
