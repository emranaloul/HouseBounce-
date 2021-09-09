import React, { useEffect, useState, useContext } from "react";
import './myrequests.css'
import {AuthContext} from '../context/auth'
import { RequestContext } from "../context/requests";
import {If, Then , Else} from 'react-if'
import {Redirect} from 'react-router-dom'
const Myrequests = (props) => {
    const context = useContext(AuthContext)
    console.log("🚀 ~ file: myrequest.jsx ~ line 8 ~ Myrequests ~ context", context)
    const context2 = useContext(RequestContext)
    console.log("🚀 ~ file: myrequest.jsx ~ line 8 ~ Myrequests ~ context2", context2)

  return (
    <>
    <If condition={context.loggedIn}>
        <Then>
    <div id='table'>
      <tr>
        <th>Owner Name</th>
        <th>City</th>
        <th>Condition</th>
        <th>Status</th>
      </tr>
      {context2.requests? context2.requests.map(request => 
          context.user.username === request.username?
            <tr>
            <td>{request.name}</td>
            <td>{request.city}</td>
            <td>{request.condition}</td>
            <td>{request.status}</td>
          </tr>: null

      ): null}
        
    </div>

        </Then>
        <Else>
        <Redirect to='/' />
        </Else>
    </If>
    </>
  );
};

export default Myrequests;
