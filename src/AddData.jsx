import { message } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { Nav, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Outlet, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const AddData = () => {

  
  // const myData = useSelector((state)=>state.addCart.cart);
  const[custVal,setCustVal] = useState([]);
  const loadData = () =>{
    let url = "http://localhost:3000/customers";
    axios.get(url).then((res)=>{
      setCustVal(res.data);
    })
  }

  useEffect(()=>{
    loadData();
  },[])
  
  const deleteCustomer = (id) =>{
    let url =  `http://localhost:3000/customers/${id}`;
    axios.delete(url).then((res)=>{
        message.success("Data deleted successfully")
        loadData();
    })
  }


  const result = custVal.map((key)=>{
      console.log(key.items);
      console.log(key.total)
      return(
        <>
          <tr>
            <td style={{fontWeight:'bold'}}>{key.name}</td>
            <td style={{fontWeight:'bold'}}>{key.mobileno}</td>
            <td style={{fontWeight:'bold'}}>{key.email}</td>
            <td style={{fontWeight:'bold',alignContent:'center',textAlign:'center'}}>{key.items}</td>
            <td style={{fontWeight:'bold',alignContent:'center',textAlign:'center'}}>{key.total}{".00 ₹"}</td>
            <td style={{alignContent:'center',textAlign:'center'}}><button onClick={()=>{deleteCustomer(key.id)}} 
            style={{
              padding:'5px 10px',
              fontWeight:'bold',
              borderRadius:'2px',
              border:'none',
              boxShadow:'0px 0px 2px',
              backgroundColor:'#18396193',
              color:'white',
            }}>remove</button></td>
          </tr>
        </>
      )
  })

  useEffect(()=>{

  },[])
  return (
    <><br />
    <div style={{
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      width:'100%',
      padding:'20px',
      color:'#fff',
      backgroundColor:'#183961'
    }}>
      <h1 style={{fontWeight:'bold'}}>Admin DashBoard</h1>
    </div>
    <br />
      <div id="add_data_hero">
        <div id="add_data">
          <Nav.Link as={Link} to="mobiledata">
            Mobile Data
          </Nav.Link>
          <Nav.Link as={Link} to="laptopdata">
            Laptop Data
          </Nav.Link>
          <Nav.Link as={Link} to="tvdata">
            TV Data
          </Nav.Link>
          <Nav.Link as={Link} to="keyboarddata">
            Keyboard Data
          </Nav.Link>
          <Nav.Link as={Link} to="watchdata">
            Watches Data
          </Nav.Link>
          <Nav.Link as={Link} to="remotedata">
            Remote Data
          </Nav.Link>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
      <br />
      <div id="header">
        <h1>Customer Orders</h1>
      </div>
      <div>
        <Table id="customerTable" striped responsive bordered hover >
          <thead>
            <tr >
            <th style={{fontWeight:'bold'}}>Customer Name</th>
            <th style={{fontWeight:'bold'}}>Mobile No</th>
            <th style={{fontWeight:'bold'}}>Email</th>
            <th style={{fontWeight:'bold',alignContent:'center',textAlign:'center'}}>Total Items Buy</th>
            <th style={{fontWeight:'bold',alignContent:'center',textAlign:'center'}}>Total Price</th>
            <th style={{fontWeight:'bold',alignContent:'center',textAlign:'center'}}>Updates</th>
            </tr>
          </thead>
          <tbody>
            {result}
          </tbody>
        </Table>
      </div>
      <br />
      <br />
    </>
  );
};
export default AddData;
