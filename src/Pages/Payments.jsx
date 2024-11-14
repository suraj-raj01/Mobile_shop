import { Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Payment = () => {
  const { payopt } = useParams();
  console.log(payopt);
  if (payopt.includes("debit")) {
    return (
      <>
        <br />
        <div id="payment_method">
          <p>Paymennt Option {payopt} Card</p>
          <Form>
            <div id="cards">
              <input type="text" placeholder="Name on Card" />
              <input type="text" placeholder="Debit / Credit Card Number" />
              <input type="text" placeholder="Expiration" />
              <input type="text" placeholder="CVV" />
              <Button variant="outline-primary">Conform</Button>
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
          <p>Paymennt Option {payopt}</p>
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
              <input type="text" placeholder="Account Number" />
              <Button variant="outline-primary">Conform</Button>
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
          <p>Paymennt Option {payopt}</p>
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
          <p>Paymennt Option {payopt}</p>
        </div>
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
