const redux = require('redux');
const createStore = redux.legacy_createStore;

const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED';

function orderCake() {
    return {
        type: 'CAKE_ORDERED',
        qantity: 1
    }
}
function restokCake(qty = 1) {
    return {
        type: 'CAKE_RESTOCKED',
        qantity: qty
    }
}
const initialState = {
    numOfCakes: 10,
    anotherProperty: 0
}
//Reducer = (previosState, action) => newState
const reducer = (state = initialState, action) => {
        switch (action.type) {
            case CAKE_ORDERED:
                return {
                    ...state,
                    numOfCakes: state.numOfCakes - 1
                }
            case CAKE_RESTOCKED:
                return {
                    ...state,
                    numOfCakes: state.numOfCakes + action.qantity
                }
            default:
                return state;
        }
}
const store = createStore(reducer);
console.log('Initial state', store.getState());
const unsubscribe = store.subscribe(() => console.log('Update State', store.getState()))
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(restokCake(3))
unsubscribe();
