import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom'

const AdminDashboard = () => {
  return (
    <>
      <div id="adminDash">
        <div id="box1">
            <Nav.Link as={Link} to="insertData">InsertData</Nav.Link>
            <Nav.Link as={Link} to="customerorder">Customer Orders</Nav.Link>
        </div>
        <div id="box2">
        <Outlet/>
        </div>
      </div>
    </>
  )
}

export default AdminDashboard;
