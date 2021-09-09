import { createSlice } from "@reduxjs/toolkit";

// const user = createSlice({
    
//     name: 'User',
//     initialState: {
//         results: [],
//     },
//     reducers:{
//         createUser(state,action){
//             state= { results: [...state.results, action.payload] };
//             return state;
//         }
//     }
// })
let users = []
const initialState = {
    user: [...users],
};
const user = (state = initialState, action) => {
    // users.push(action.payload)
    switch (action.type) {
      case 'add':
        return {
         
          user: [...users, action.payload],
        };
  
      default:
        return state;
    }
  };

  export const add = (payload) => ({
    type: 'add',
    payload: payload,
  });
// export const add = payload =>{
// console.log("🚀 ~ file: signup.js ~ line 17 ~ payload", payload)
// console.log("🚀 ~ file: signup.js ~ line 19 ~ createUser", createUser)
//  createUser(payload)
// }

// export const {createUser} = user.actions

export default user;