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
        <h2 style={{color:'#183961',fontWeight:'600'}}>WELCOME TO THE MOBILESHOP <br /> <center>Mr. <span style={{fontWeight:'600',color:'deepskyblue'}}>{username}</span></center> </h2>
        <br />
        <Button variant="outline-primary" onClick={logOut}>logOut</Button>
        </div>
        </>
    )
}
export default Dashboard;