const store=require('./app/store');
const { iceCreamActions } = require('./features/iceCream/iceCreamSlice');
const cakeActions=require('./features/cake/cakeSlice').cakeActions


console.log('Initial State',store.getState());

// when using middleware we didn't use this line of code
// const unsubscribe=store.subscribe(()=>console.log('Updated State',store.getState()));
const unsubscribe=store.subscribe(()=>{});


// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.restocked(5))

store.dispatch(iceCreamActions.ordered())
store.dispatch(iceCreamActions.ordered())
store.dispatch(iceCreamActions.ordered())
store.dispatch(iceCreamActions.restocked(5))

unsubscribe();