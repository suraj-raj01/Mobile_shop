import { message } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const Dashboard = () =>{
    const navigate = useNavigate();
    const[username,setUserName] = useState("")
    useEffect(()=>{
        const name = localStorage.getItem("username");
        setUserName(name);
    },[])
    const logOut = () =>{
        localStorage.clear();
        message.success("logOut Successfull!!")
        navigate("/")
    }
    return(
        <>
        <div style={{display:'flex',flexDirection:'column', alignItems:'center',justifyContent:'center',height:'70vh'}}>
        <h1>Welcome {username}</h1>
        <br />
        <Button variant="outline-primary" onClick={logOut}>logOut</Button>
        </div>
        </>
    )
}
export default Dashboard;