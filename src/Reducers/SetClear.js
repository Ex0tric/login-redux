// import jwt_decode from "jwt-decode";

// let initialToken = localStorage.getItem('tokens') ? JSON.parse(localStorage.getItem('tokens')) : null
// console.log(initialToken)
// let initialToken1 = localStorage.getItem('tokens') ? jwt_decode(localStorage.getItem('tokens')) : null
// console.log(initialToken1)

const intialState = localStorage.getItem('tokens') ? JSON.parse(localStorage.getItem('tokens')) : null
// const intialState1 = localStorage.getItem('tokens') ? jwt_decode(JSON.parse(localStorage.getItem('tokens')).access) : null

// export const token = (state = intialState, action) =>{
//   switch(action.type){
//     case "SETTOKEN": return action.payload;
//     default: return state;
//   }
// }

export const user = (state = intialState, action) =>{
  switch(action.type){
    case "SETUSER": return action.payload;
    default: return state;
  }
}
