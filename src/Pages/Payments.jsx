import { message } from "antd";
import { Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Payment = () => {
  const { payopt } = useParams();
  console.log(payopt);

  const order = () =>{
    message.success("Your order will arive in 4-5 working days")
  }

  if (payopt.includes("debit")) {
    return (
      <>
        <br />
        <div id="payment_method">
          <p>Paymennt Option <span style={{color:'deepskyblue',textTransform:'capitalize'}}>{payopt}</span> Card</p>
          <Form>
            <div id="cards">
              <input required type="text" placeholder="Name on Card" />
              <input required type="number" placeholder="Debit / Credit Card Number" />
              <input required type="date" placeholder="Expiration" />
              <input required type="text" placeholder="CVV" />
              <Button variant="outline-primary" onClick={order}>Conform</Button>
            </div>
          </Form>
        </div>
        <br />
      </>
    );
  }
  if (payopt.includes("netbanking")) {
    return (
      <>
        <br />
        <div id="payment_method">
          <p>Paymennt Option <span style={{color:'deepskyblue',textTransform:'capitalize'}}>{payopt}</span></p>
          <Form>
            <div id="cards">
              <Form.Select>
                <option>Select a Bank</option>
                <option value="1">Kotak Mahindra</option>
                <option value="2">SBI</option>
                <option value="3">BOB</option>
                <option value="3">PNB</option>
                <option value="3">HDFC Bank</option>
                <option value="3">IDFC Bank</option>
                <option value="3">ICICI Bank</option>
                <option value="3">Axis Bank</option>
                <option value="3">Kenara Bank</option>
                <option value="3">India Bank</option>
              </Form.Select>
              <input type="text" placeholder="Bank Holder Name" />
              <input type="text" placeholder="IFSC Code" />
              <input type="number" placeholder="Account Number" />
              <Button variant="outline-primary" onClick={order}>Conform</Button>
            </div>
          </Form>
        </div>
        <br />
      </>
    );
  }
  if (payopt.includes("upi")) {
    return (
      <>
        <br />
        <div id="payment_method">
          <Form>
          <p>Paymennt Option <span style={{color:'deepskyblue',textTransform:'uppercase'}}>{payopt} </span>Apps</p>
            <div id="cards">
              <div id="box"><input type="radio" name="upi"/><i class="fab fa-google-pay"></i></div>
              <div id="box"><input type="radio" name="upi"/><img src="https://cdn.worldvectorlogo.com/logos/phonepe-1.svg" alt="paytm" height="15px" /></div>
              <div id="box"><input type="radio" name="upi"/><i class="fab fa-paypal"></i></div>
              <div id="box"><input type="radio" name="upi"/><i class="fab fa-amazon-pay"></i></div>
              <div id="box"><input type="radio" name="upi"/><i class="fab fa-apple-pay"></i></div>
              <div id="box"><input type="radio" name="upi"/><img src="https://cdn.iconscout.com/icon/free/png-256/free-paytm-logo-icon-download-in-svg-png-gif-file-formats--online-payment-brand-logos-pack-icons-226448.png?f=webp&w=256" alt="paytm" height="30px" /></div>
              <Button variant="outline-primary" onClick={order}>Conform</Button>
            </div>
          </Form>
        </div>
        <br />
      </>
    );
  }
  if (payopt.includes("emi")) {
    return (
      <>
        <br />
        <div id="payment_method">
          <p>Paymennt Option <span style={{color:'deepskyblue',textTransform:'uppercase'}}>{payopt} </span></p>
        </div>
        <center id="header">
        <h1>Not Availabe this Option !!!</h1>
        </center>
        <br />
      </>
    );
  }
  return (
    <>
      <div id="header">
        <h1>Payment Page</h1>
      </div>
      <h2>Payment Option : {payopt}</h2>
    </>
  );
};
export default Payment;
