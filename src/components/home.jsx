import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/auth";
import { RequestContext } from "../context/requests";
import "./home.css";
import { If, Then, Else } from "react-if";
import { Form, Button, Row, Col, FloatingLabel } from "react-bootstrap";
import Popup from "./popup";

const Home = (props) => {
  const [submit, setSubmit] = useState(false);
  const context = useContext(AuthContext);
  const context2 = useContext(RequestContext);
  const handleSubmit = e =>{
    e.preventDefault();
      
      let request  = {
        id: context2.requests.length + 1,
        username: context.user.username,
        name: e.target.inlineFormInputName.value, 
        address: e.target.formGridAddress1.value, 
        city: e.target.formGridCity.value,
        region: e.target.formGridZip.value, 
        rooms: e.target.formGridState.value, 
        condition: e.target.checkbox.checked? 'used' : 'new',
        description: e.target.floatingTextarea2.value, 
        status: 'pending'
      }
      context2.addRequest(request);
      document.getElementById('homeform2').reset()
      setSubmit(true)
    }
  return (
    <>
      <If condition={context.loggedIn}>
        <Then>
          <div id='homeform'>
            <Form onSubmit={handleSubmit} id='homeform2'>
                <fieldset>
                    <legend>House Details</legend>
               
              <Row className="mb-3">
                <Col sm={3} className="my-1">
                  <Form.Label htmlFor="inlineFormInputName">
                  House Owner 
                  </Form.Label>
                  <Form.Control
                    id="inlineFormInputName"
                    placeholder="Name"
                  />
                </Col>
              </Row>

              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="1234 Main St" />
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>State/Region</Form.Label>
                  <Form.Control />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>How many rooms</Form.Label>
                  <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Form.Select>
                </Form.Group>

              </Row>

              <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="Used House" id='checkbox' value='used' />
              </Form.Group>
              <FloatingLabel
                controlId="floatingTextarea2"
                label="House Description"
              >
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "100px" }}
                />
              </FloatingLabel>
              <Button id='submit' variant="success" type="submit">
                Submit
              </Button>
              </fieldset>
            </Form>
          </div>
          <Popup show={submit} title='Request Sent' message='admin will approve/reject your request'/>
        </Then>
        <Else>
          <div id="home">
            <img
              id="homeimg"
              src="data:image/jpeg;base64,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"
              alt="p"
            />
          </div>
        </Else>
      </If>
    </>
  );
};

export default Home;
