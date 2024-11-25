import { message } from 'antd';
import React, { useState } from 'react'
import { Form, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'

const BillCheckout = () => {
  const navigate = useNavigate();
  const {total} = useParams();
  const myData = useSelector((state)=>state.addCart.cart);
  const[payment,setPayment] = useState("");
  const handleInput = (e) =>{
    const val = e.target.value;
    setPayment(val);
  }

  const details = (id) => {
    navigate(`/details/${id}`);
  };

  let result;
  if(payment.includes("upi")){
    result = <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/UPI_logo.svg/800px-UPI_logo.svg.png" alt="" height="100vh"/>
  }
  else if(payment.includes("debit")){
    result = <img src="https://www.shutterstock.com/image-vector/set-credit-cards-vector-mockups-600nw-1924406663.jpg" alt="" height="150px"/>
  }
  else if(payment.includes("cash")){
    result = <img src="https://t4.ftcdn.net/jpg/08/40/17/79/360_F_840177909_VwMN47Mxk87ecEaEYH6eNlmN3jkbBiqo.jpg" alt="" height="180px"/>
  }
  else if(payment.includes("netbank")){
    result = <img src="https://img.freepik.com/free-vector/online-banking-concept-illustration_114360-12875.jpg" alt="" height="180px"/>
  }
  else{
    result = <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/UPI_logo.svg/800px-UPI_logo.svg.png" alt="" height="100vh"/>
  }

  // Order success
  const orderSuccess = () =>{
    message.success("Your order will arrive in 3-4 working days")
  }

  const res = myData.map((key)=>{
    return(
        <>
        <tr>
            <td onClick={()=>{details(key.id)}}>{key.name}</td>
            <td id='desc' onClick={()=>{details(key.id)}}>{key.description}</td>
            <td id='price' onClick={()=>{details(key.id)}}>{key.price}{".00 ₹"}</td>
        </tr>
        </>
    )
  })
  return (
    <>
      <div id="header">
      <h1>Bill Checkout</h1>
      </div>
     
     <Table id='billcheckout' striped responsive bordered hover>
        <thead>
        <tr>
            <th>Product Name</th>
            <th>Description</th>
            <th>Price</th>
        </tr>
        </thead>
        <tbody>
            {res}
        </tbody>
     </Table>
      <div
      style={{
        display:'flex',
        alignItems:'center',
        justifyContent:'end',
        width:'90%',
        margin:'auto',
        padding:'20px 0px',
        color:'#183961'
      }}
      ><h2 style={{fontWeight:'bold'}}>Total Bill : {total}{".00 ₹"}</h2></div>
      <br />
      <div id="checkout_form">
            <div id="shiped">
                <h3 style={{fontWeight:'bold',padding:'10px 0px',color:'#183961'}}>Shipping Address</h3><br />
                <Form>
                    <input type="text" placeholder='Name' />
                    <input type="text" placeholder='Mobile Number' />
                    <input type="text" placeholder='Email' />
                    <input type="text" placeholder='State' />
                    <input type="text" placeholder='District' />
                    <input type="text" placeholder='Pin Code' />
                    <input type="text" placeholder='Block Name' />
                    <input type="text" placeholder='Village Name' />
                    <input type="text" placeholder='House Name / Number' />
                </Form>
                <br />
                <button onClick={orderSuccess}>Submit</button>
            </div>
            <div id="payment">
            <h3 style={{fontWeight:'bold',padding:'10px 0px',color:'#183961'}}>Payment Methods</h3>
            
            <div><input type="radio" name='payment' onChange={handleInput} value="debit"/> Debit / Credit Card</div>
            <div><input type="radio" name='payment' onChange={handleInput} value="upi"/> UPI Payment</div>
            <div><input type="radio" name='payment' onChange={handleInput} value="netbank"/> Internet Banking</div>
            <div><input type="radio" name='payment' onChange={handleInput} value="cash"/> Cash on Delivery</div>
            <hr />
            <div id='result'>
                {result}
            </div>
            </div>
      </div>
    <br /><br />
    </>
  )
}

export default BillCheckout
