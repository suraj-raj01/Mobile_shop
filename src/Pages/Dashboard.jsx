import { message } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const Dashboard = () => {
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [usermail, setUserEmail] = useState("");
  useEffect(() => {
    const name = localStorage.getItem("username");
    const email = localStorage.getItem("usermail");
    setUserName(name);
    setUserEmail(email);
    console.log(usermail);
  }, []);
  const logOut = () => {
    localStorage.clear();
    message.success("logOut Successfull!!");
    navigate("/");
  };

  // on mouse enter camera icon will appear
  const camera = () =>{
    document.getElementById("camera").style.display="block";
  }
  // on mouse leave camera icon will disappear
  const camera1 = () =>{
    document.getElementById("camera").style.display="none";
  }


  return (
    <>
      <div id="main">
        <div id="box1">
            <div id="profile" onMouseOver={camera} onMouseLeave={camera1} >
              {/* camera iconn */}
            <div id="camera">
            <i class="fa-solid fa-camera"></i>
            </div>
            </div>
            <br />
            <h4 style={{fontWeight:'bold'}}>{username}</h4>
            <p style={{textTransform:'lowercase'}}>{usermail}</p>
        </div>
        <div id="box2">
          <h2 style={{ color: "#183961", fontWeight: "600" }}>
            WELCOME TO THE MOBILESHOP <br />{" "}
            <center>
              Mr.{" "}
              <span style={{ fontWeight: "600", color: "deepskyblue" }}>
                {username}
              </span>
            </center>{" "}
          </h2>
          <br />
          <Button variant="outline-primary" onClick={logOut}>
            logOut
          </Button>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
