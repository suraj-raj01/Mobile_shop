import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Payment = () => {
  const {payopt} = useParams();
  console.log(payopt)
  if(payopt.includes("debit")){
    return(
      <>
      <br />
      <div id="payment_method">
        <p>Paymennt Option {payopt} Card</p>
        <div id="cards">
          <input type="text" placeholder="Name on Card" />
          <input type="text" placeholder="Debit / Credit Card Number" />
          <input type="text" placeholder="Expiration" />
          <input type="text" placeholder="CVV" />
          <Button variant="outline-primary">Conform</Button>
        </div>
      </div>
      <br />
      </>
    )
  }
  if(payopt.includes("netbanking")){
    return(
      <>
      <br />
      <div id="payment_method">
      <p>Paymennt Option {payopt}</p>
      </div>
      <br />
      </>
    )
  }
  if(payopt.includes("upi")){
    return(
      <>
      <br />
      <div id="payment_method">
      <p>Paymennt Option {payopt}</p>
      </div>
      <br />
      </>
    )
  }
  if(payopt.includes("emi")){
    return(
      <>
      <br />
      <div id="payment_method">
      <p>Paymennt Option {payopt}</p>
      </div>
      <br />
      </>
    )
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
