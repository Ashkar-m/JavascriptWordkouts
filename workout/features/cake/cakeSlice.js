
// const createSlice=require('@reduxjs/toolkit').createSlice

const reducer = require('../iceCream/iceCreamSlice')


// const initialState={
//     numOfCakes:10
// }


// const cakeSlice=createSlice({
//     name:'cake',
//     initialState,
//     reducers:{
//         ordered:(state)=>{
//             state.numOfCakes--
//         },
//         restocked:(state,action)=>{
//             state.numOfCakes+=action.payload
//         }
//     }
// })

// module.exports=cakeSlice.reducer
// module.exports.cakeActions=cakeSlice.actions

const createSlice=require('@reduxjs/toolkit').createSlice

const initialState={numsOfCake:10}

const cakeSlice=createSlice(
    {name:'cake',
    initialState,
    reducer:{
        ordred:(state)=>{
            state.numsOfCake--
        },
        restocked:(state,action)=>{
            state.numsOfCake+action.payload
        }
    }}
)
    
module.exports=cakeSlice.reducer
module.exports.cakeAction=cakeSlice.actions