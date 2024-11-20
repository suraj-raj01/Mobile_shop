import React, { useState } from 'react'
import { Form, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

const BillCheckout = () => {
  const {total} = useParams();
  const myData = useSelector((state)=>state.addCart.cart);
  const[payment,setPayment] = useState("");
  const handleInput = (e) =>{
    const val = e.target.value;
    setPayment(val);
  }

  let result;
  if(payment.includes("upi")){
    result = "UPI Payments"
  }
  if(payment.includes("debit")){
    result = "Debit Card"
  }
  if(payment.includes("cash")){
    result = "Cash on Delivery"
  }
  if(payment.includes("netbank")){
    result = "Net Banking"
  }

  const res = myData.map((key)=>{
    return(
        <>
        <tr>
            <td>{key.name}</td>
            <td id='desc'>{key.description}</td>
            <td id='price'>{key.price}{".00 ₹"}</td>
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
        fontWeight:'bold',
        padding:'20px 0px',
        color:'#183961'
      }}
      ><h3>Total Bill : {total}{".00 ₹"}</h3></div>
      <br />
      <div id="checkout_form">
            <div id="shiped">
                <h3 style={{fontWeight:'bold',padding:'10px 0px',color:'#183961'}}>Shifting Address</h3>
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
                <button>Submit</button>
            </div>
            <div id="payment">
            <h3 style={{fontWeight:'bold',padding:'10px 0px',color:'#183961'}}>Payment Methods</h3>
            
            <div><input type="radio" name='payment' onChange={handleInput} value="debit"/> Debit / Credit Card</div>
            <div><input type="radio" name='payment' onChange={handleInput} value="upi"/> UPI Payment</div>
            <div><input type="radio" name='payment' onChange={handleInput} value="netbank"/> Internet Banking</div>
            <div><input type="radio" name='payment' onChange={handleInput} value="cash"/> Cash on Delivery</div>
            <hr />
            <div style={{backgroundColor:'#183961',height:'30vh',color:'white',fontSize:'40px'}}>
                {result}
            </div>
            </div>
      </div>
    <br /><br />
    </>
  )
}

export default BillCheckout
