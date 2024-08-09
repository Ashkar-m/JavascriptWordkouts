// const redux=require('redux');
// const createStore=redux.createStore

// const cake_ordered='cake_ordered';
// const restockCake='restock_cake';
// function orderedCake(){
//     return{
//         type:cake_ordered,
//         quantity:1,
//     }
// }

// function cakeRestock(qty=1){
//     return{
//         type:restockCake,
//         quantity:qty,
//     }
// }

// const initialState={
//     initialCake:10
// }

// const reducer=(state=initialState,action)=>{
//     switch (action.type) {
//         case cake_ordered:
//             return {...state,initialCake:state.initialCake-1}
//         case restockCake:
//             return {...state,initialCake:state.initialCake+action.quantity}
    
//         default:
//             return state
//     }
// }

// const store =createStore(reducer)
// console.log('initial state:',store.getState());

// const unsubscribe= store.subscribe(()=>
// console.log('update state:',store.getState()))

// store.dispatch(orderedCake())
// store.dispatch(orderedCake())
// store.dispatch(orderedCake())
// store.dispatch(cakeRestock(5))


// // bindaction method
// const actions=redux.bindActionCreators({orderedCake,cakeRestock},store.dispatch)
// actions.orderedCake()
// actions.orderedCake()
// actions.orderedCake()
// actions.cakeRestock(2)

// unsubscribe();




const redux=require('redux')
const createStore=redux.createStore


const cake_ordered='cake_ordered'
const cake_restocked='cake_restocked'


const initialState={
    numsOfCakes:10,
}

function cake_orders(){
    return{
    type:cake_ordered,
    payload:1,
    }
}

function cake_restocks(qty=1){
    return{
        type:cake_restocked,
        payload:qty
    }
}


const reducer=(state=initialState,action)=>{
    switch(action.type){
        case 'cake_ordered':return{
            ...state,numsOfCakes:state.numsOfCakes-1
        }
        case 'cake_restocked':return{
            ...state,numsOfCakes:state.numsOfCakes+action.payload
        }
    }
}

const store=createStore(reducer)

console.log('Initial state',store.getState());
const unsubscribe=store.subscribe(()=>console.log('Updated state is ',store.getState()))

store.dispatch(cake_orders())
store.dispatch(cake_orders())
store.dispatch(cake_orders())
store.dispatch(cake_restocks(2))

unsubscribe();