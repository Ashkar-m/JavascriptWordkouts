const configureStore=require('@reduxjs/toolkit').configureStore
const ReduxLogger=require('redux-logger');

const cakeReducer=require('../features/cake/cakeSlice')
const iceCreamReducer=require('../features/iceCream/iceCreamSlice')

const logger=ReduxLogger.createLogger()

const store=configureStore({
    reducer:{
        cake:cakeReducer,
        iceCream:iceCreamReducer,
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
})

module.exports=store