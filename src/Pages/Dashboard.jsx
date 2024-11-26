import { message } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const Dashboard = () => {
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [usermail, setUserEmail] = useState("");
  const [usermobile, setUserMobile] = useState("");

  useEffect(() => {
    const name = localStorage.getItem("username");
    const email = localStorage.getItem("usermail");
    const mobile = localStorage.getItem("usermobile");
    setUserName(name);
    setUserEmail(email);
    setUserMobile(mobile);
  }, []);

  const logOut = () => {
    localStorage.clear();
    message.success("logOut Successfull!!");
    navigate("/");
  };

  // on mouse enter camera icon will appear
  const camera = () => {
    document.getElementById("camera").style.display = "block";
  };
  // on mouse leave camera icon will disappear
  const camera1 = () => {
    document.getElementById("camera").style.display = "none";
  };

  // complete your profile
  const completeProf = () => {
    navigate("/register");
  };

  return (
    <>
      <div id="main">
        {/* logout function */}
        <div id="box1">
          <div id="logout">
          <button id="logoutbtn" onClick={logOut}>
            LogOut
          </button>
          </div>
          <div id="profile" onMouseOver={camera} onMouseLeave={camera1}>
            {/* camera iconn */}
            <div id="camera">
              <i class="fa-solid fa-camera"></i>
            </div>
          </div>
          <br />
          <h3 style={{ fontWeight: "bold",textTransform:'capitalize' }}>{username}</h3>
          <hr />
          <div
            style={{
              width: "90%",
              margin: "auto",
              // boxShadow:'0px 0px .9px',
              fontSize: "12px",
              textAlign: "start",
              height: "185px",
              padding: "0px 20px",
              display: "flex",
              flexDirection: "column",
              borderRadius: "7px",
              gap: "5px",
              textTransform:'none'
            }}
          >
            <span>
              Email : {usermail}
            </span>
            <span>
              Mobile : {usermobile}
            </span>
          </div>
          <div
            style={{
              height: "40px",
              width: "100%",
              // border:'1px solid',
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems:'center',
              justifyContent:'center',
              // margin:'2px',
              backgroundColor:'whitesmoke',
              borderBottomRightRadius:'5px',
              borderBottomLeftRadius:'5px'
            }}
          >
            <span
              style={{
                textTransform: "capitalize",
                color: "deepskyblue",
                cursor: "pointer",
                fontWeight: "700",
                fontSize:'14px'
              }}
              onClick={completeProf}
            >
              complete your profile{" "}
            </span>
          </div>
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
          
        </div>
      </div>
    </>
  );
};
export default Dashboard;
