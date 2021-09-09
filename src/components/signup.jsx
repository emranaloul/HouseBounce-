import React, { useEffect, useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../store/signup";
import { If, Then, Else } from "react-if";
import "./signup.css";
import { AuthContext } from "../context/auth";
import { Redirect } from "react-router";
import Popup from "./popup"

const Signup = (props) => {
  const context = useContext(AuthContext);
  console.log("🚀 ~ file: signup.jsx ~ line 10 ~ Signup ~ context", context);
  // const dispatch = useDispatch();
  // const state = useSelector(mapStateToProps);

  let handleSignup = (e) => {
    e.preventDefault();
    context.signup(
      e.target.formBasicEmail.value,
      e.target.formBasicPassword.value,
      e.target.group1.value
    );
  };
  return (
    <>
      <If condition={!context.register}>
        <Then>
          <Form id="signupform" onSubmit={handleSignup}>
            <fieldset>
              <legend>Signup</legend>
            
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control type="username" placeholder="Enter Username" />
              {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox" >
              <Form.Check
                inline
                label="House Owner"
                name="group1"
                type="radio"
                id={`House-Owner`}
                value="House-Owner"
              />
              <Form.Check
                inline
                label="Admin"
                name="group1"
                type="radio"
                id={`Admin`}
                value="Admin"
              />
            </Form.Group>
            <Button variant="success" type="submit">
              Signup
            </Button>
            </fieldset>
          </Form>
          <Popup show={context.existUser} title="Username already in use" message="Please use a different username"/>


        </Then>
        <Else>
          <Redirect to="/signin" />
        </Else>
      </If>
    </>
  );
};


export default Signup;
