import { useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
const GenerateBill = () => {
  const Data = useSelector((state) => state.addCart.cart);
  let totalBill=0;
  const res = Data.map((key) => {
    totalBill+=key.price;
    return (
      <>
        <tr>
          <td style={{fontWeight:'bold',textTransform:'capitalize'}}>{key.name}</td>
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
        <Table striped  hover responsive>
          <thead>
            <tr>
              <th style={{borderTopLeftRadius:'15px',border:'none'}}>MOBLE NAME</th>
              <th>CPU MODEL</th>
              <th>PRODUCT PRICE</th>
              <th style={{borderTopRightRadius:'15px',border:'none'}}>OPERATING SYSTEM</th>
            </tr>
          </thead>
          <tbody>{res}</tbody>
          <thead>
            <tr rowSpan="3">
                <th colSpan={2} style={{padding:'10px 10px',fontWeight:'bold'}}>TOTAL AMOUNT</th>
                <th style={{padding:'10px 10px',fontWeight:'bold'}}>{totalBill}{".00 ₹"}</th>
                <th > <button style={{textTransform:'capitalize',padding:'7px 10px',fontWeight:'bold'}}  variant="warning" onClick={prnt} >Print Bill</button> </th>
            </tr>
          </thead>
        </Table>
      </div>
      <br />
    </>
  );
};
export default GenerateBill;
