import React, { useEffect, useState, useContext } from "react";
import "./myrequests.css";
import { AuthContext } from "../context/auth";
import { RequestContext } from "../context/requests";
import { If, Then, Else } from "react-if";
import { Redirect } from "react-router-dom";
import Acl from "./acl";
import { Button } from "react-bootstrap";

const AdminRequets = (props) => {
  const context = useContext(AuthContext);
  console.log(
    "🚀 ~ file: myrequest.jsx ~ line 8 ~ Myrequests ~ context",
    context
  );
  const context2 = useContext(RequestContext);
  console.log(
    "🚀 ~ file: myrequest.jsx ~ line 8 ~ Myrequests ~ context2",
    context2
  );

  const approve = id =>{
  console.log("🚀 ~ file: adminrequest.jsx ~ line 23 ~ AdminRequets ~ id", id)
    
  }

  const reject = id =>{
  console.log("🚀 ~ file: adminrequest.jsx ~ line 28 ~ AdminRequets ~ id", id)

}

  return (
    <>
      <If condition={context.loggedIn}>
        <Then>
          <Acl role={context.user.role}>
            <div id="table1">
              <tr>
                <th>Username</th>
                <th>Owner Name</th>
                <th>City</th>
                <th>Condition</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
              {context2.requests
                ? context2.requests.map((request) => (
                    <tr>
                      <td>{request.username}</td>
                      <td>{request.name}</td>
                      <td>{request.city}</td>
                      <td>{request.condition}</td>
                      <td>{request.status}</td>
                      <td>
                          <select onChange={approve(request.id)}>
                              <option value="approve">Approve</option>
                              <option value="reject">Reject</option>
                          </select>
                        {/* <Button variant="success" onClick={approve(request.id)}>Approve</Button>{" "}
                        <Button variant="danger" onClick={reject(request.id)}>Reject</Button>{" "} */}
                      </td>
                    </tr>
                  ))
                : null}
            </div>
          </Acl>
        </Then>
        <Else>
          <Redirect to="/" />
        </Else>
      </If>
    </>
  );
};

export default AdminRequets;
