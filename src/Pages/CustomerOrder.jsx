import React from "react";
import { message } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const CustomerOrder = () => {
  const [custVal, setCustVal] = useState([]);
  const loadData = () => {
    let url = "http://localhost:3000/customers";
    axios.get(url).then((res) => {
      setCustVal(res.data);
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  const deleteCustomer = (id) => {
    let url = `http://localhost:3000/customers/${id}`;
    axios.delete(url).then((res) => {
      message.success("Data deleted successfully");
      loadData();
    });
  };

  const result = custVal.map((key) => {
    
    return (
      <>
        <tr>
          <td style={{ fontWeight: "bold" }}>{key.name}</td>
          <td style={{ fontWeight: "bold" }}>{key.mobileno}</td>
          <td style={{ fontWeight: "bold" }}>{key.email}</td>
          <td
            style={{
              fontWeight: "bold",
              alignContent: "center",
              textAlign: "center",
            }}
          >
            {key.items}
          </td>
          <td
            style={{
              fontWeight: "bold",
              alignContent: "center",
              textAlign: "center",
            }}
          >
            {key.total}
            {".00 ₹"}
          </td>
          <td style={{ alignContent: "center", textAlign: "center" }}>
            <button
              onClick={() => {
                deleteCustomer(key.id);
              }}
              style={{
                padding: "5px 10px",
                fontWeight: "bold",
                borderRadius: "2px",
                border: "none",
                boxShadow: "0px 0px 2px",
                backgroundColor: "#18396193",
                color: "white",
              }}
            >
              remove
            </button>
          </td>
        </tr>
      </>
    );
  });
  return (
    <>
      <div id="header">
        <h1>Customer Orders</h1>
      </div>
      <div>
        <Table id="customerTable" striped responsive bordered hover>
          <thead>
            <tr>
              <th style={{ fontWeight: "bold" }}>Customer Name</th>
              <th style={{ fontWeight: "bold" }}>Mobile No</th>
              <th style={{ fontWeight: "bold" }}>Email</th>
              <th
                style={{
                  fontWeight: "bold",
                  alignContent: "center",
                  textAlign: "center",
                }}
              >
                Total Items Buy
              </th>
              <th
                style={{
                  fontWeight: "bold",
                  alignContent: "center",
                  textAlign: "center",
                }}
              >
                Total Price
              </th>
              <th
                style={{
                  fontWeight: "bold",
                  alignContent: "center",
                  textAlign: "center",
                }}
              >
                Updates
              </th>
            </tr>
          </thead>
          <tbody>{result}</tbody>
        </Table>
      </div>
    </>
  );
};

export default CustomerOrder;
