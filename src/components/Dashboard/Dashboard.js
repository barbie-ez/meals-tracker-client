import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import SignUp from '../../containers/Auth/SignUpController'
import Login from  '../../containers/Auth/LoginController'
import "../../styles/dashboard.scss";

const Dashboard = ({ authed }) => {
  return (
    <div className="dashboard">
      <Navbar>
        <Navbar.Brand href="#index">Meal Tracker</Navbar.Brand>
        <Navbar.Toggle />
        {authed ? (
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed In as <a href="#login">Jason Derulo</a>
            </Navbar.Text>
          </Navbar.Collapse>
        ) : (
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <SignUp/>
              <Login/>
              
            </Nav>
          </Navbar.Collapse>
        )}
      </Navbar>
    </div>
  );
};


export default Dashboard;