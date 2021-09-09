import React, { useEffect, useState, useContext } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./header.css";
import { If, Else, Then } from "react-if";
import { AuthContext } from "../context/auth";
import Acl from './acl'

const Header = (props) => {
  const context = useContext(AuthContext);
  return (
    <>
      <div id="header">
        <Link to="/">
          <img
            id="logo"
            src="https://j.top4top.io/p_2075oq51q1.png"
            alt="LOGO"
          />
        </Link>
        <Acl role={context.user.role}>
        <Link to="/adminrequest">
          <Button id="myrequests" variant="success">
            Sellers Requests
          </Button>

        </Link>
        </Acl>
        <div>
          <If condition={context.loggedIn}>
            <Then>
              <Link to="/myrequests">
                <Button id="myrequests" variant="success">
                  My Requests
                </Button>
              </Link>
              <Button id="signin" variant="light" onClick={context.logout}>
                logout
              </Button>
            </Then>
            <Else>
              <Link to="/signin">
                <Button id="signin" variant="light">
                  Signin
                </Button>
              </Link>
              <Link to="/signup">
                <Button variant="success">New Property</Button>{" "}
              </Link>
            </Else>
          </If>
          {/* <button id="signin">signin</button>
                    <button id="signup">New Property</button> */}
        </div>
      </div>
    </>
  );
};

export default Header;
