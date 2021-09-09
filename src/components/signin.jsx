import React, { useEffect, useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import './signin.css'
import { AuthContext } from "../context/auth";
import {If, Then , Else } from "react-if";
import { Redirect } from "react-router";

const Signin = (props) => {
  const context = useContext(AuthContext)
  const handleSignin = e =>{
    e.preventDefault()
    console.log("🚀 ~ file: signin.jsx ~ line 9 ~ Signin ~ e", e.target.formBasicEmail.value,e.target.formBasicPassword.value)
    context.signin(e.target.formBasicEmail.value, e.target.formBasicPassword.value)
    
  }
  return (
    <>
    <If condition={context.loggedIn}>
      <Then>
        <Redirect to='/'/>
      </Then>
      <Else>
      <Form id="signinform" onSubmit={handleSignin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="username" placeholder="Enter Username" />
          {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Signin
        </Button>
      </Form>
      </Else>
    </If>
    </>
  );
};

export default Signin;
