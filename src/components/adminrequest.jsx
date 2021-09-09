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
 
  const context2 = useContext(RequestContext);
 
  let pendingRequests = context2.requests.filter(request => request.status === 'pending')

  const update = (e, r) => {
    e.preventDefault();
    let newR = {
      id:r.id,
      username: r.username,
      name: r.name, 
      address: r.address, 
      city: r.city,
      region: r.region, 
      rooms: r.rooms, 
      condition: r.condition,
      description: r.description, 
      status: e.target.action.value
    }
   let newRequests = context2.requests.filter(request => request.id !== r.id)
   newRequests.push(newR)
   console.log("🚀 ~ file: adminrequest.jsx ~ line 25 ~ update ~ newRequests", newRequests)
   context2.update(newRequests)
  };

  

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
                ? pendingRequests.map((request) => (
                   
                      <tr>
                        <td>{request.username}</td>
                        <td>{request.name}</td>
                        <td>{request.city}</td>
                        <td>{request.condition}</td>
                        <td>{request.status}</td>
                        <td>
                          {/* <Button variant="success" onClick={update(request.id)}>update</Button>{" "}
                        <Button variant="danger" onClick={reject(request.id)}>Reject</Button>{" "} */}
                          <form
                            action=""
                            onSubmit={(e) => update(e, request)}
                          >
                            <select id='action'>
                              <option value="approved">Approve</option>
                              <option value="rejected">Reject</option>
                            </select>
                            <button id='update'>Update</button>
                          </form>
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
