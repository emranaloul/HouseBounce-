import React, { useEffect, useState } from "react";
export const RequestContext = React.createContext();

const Requests = (props) => {
  const [requests, setRequests] = useState([]);

  const addRequest = (request) => {
    setRequests([...requests, request]);
  };

  let state = {
    requests: requests,
    addRequest: addRequest
  };

  return (
    <RequestContext.Provider value={state}>
      {props.children}
    </RequestContext.Provider>
  );
};

export default Requests;
