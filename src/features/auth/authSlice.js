// import {creteSlice} from '@reduxjs/toolkit'  //createasyncthunk



// //get user from local storage
// const user = JSON.parse(localStorage.getItem("user"))

// const initialState = {
//     user : user ? user :null,
//     isError:false,
//     isSuccess:false,
//     isLoading:false,
//     message: ""
// }

// export const authSlice = creteSlice ({
//     name:"auth",
//     initialState,
//     reducers:{
//         reset:(state) => {
//             state.isLoading=false,
//             state.isError=false,
//             state.isSuccess= false,
//             state.message=" "
//         }

//     },
//     extraReducer: () => {}
// })

// export const {reset} = authSlice.actions
// export default authSlice.reducer