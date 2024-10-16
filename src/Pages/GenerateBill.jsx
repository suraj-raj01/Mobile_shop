import { useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
const GenerateBill = () => {
  const Data = useSelector((state) => state.addCart.cart);
  let totalBill=0;
  const res = Data.map((key) => {
    totalBill+=key.price;
    return (
      <>
        <tr>
          <td>{key.name}</td>
          <td>{key.model}</td>
          <td>{key.price}{".00 ₹"}</td>
          <td>{key.OS}</td>
        </tr>
      </>
    );
  });

  const prnt = () =>{
    let a = document.getElementById("bill-gen");
    window.print(a);    
  }

  return (
    <>
      <div id="header">
        <h1>Generate Bill</h1>
      </div>
      <div id="bill-gen">
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>MOBLE NAME</th>
              <th>CPU MODEL</th>
              <th>MOBILE PRICE</th>
              <th>OPERATING SYSTEM</th>
            </tr>
          </thead>
          <tbody>{res}</tbody>
          <thead>
            <tr rowSpan="3">
                <th colSpan={2} style={{padding:'10px 10px'}}>TOTAL AMOUNT</th>
                <th style={{padding:'10px 10px'}}>{totalBill}{".00 ₹"}</th>
                <th style={{padding:'10px 10px'}}> <button onClick={prnt} style={{padding:'8px 15px',border:'none',fontWeight:'bold',fontSize:'12px'}}>Print Bill</button> </th>
            </tr>
          </thead>
        </Table>
      </div>
      <br />
    </>
  );
};
export default GenerateBill;
