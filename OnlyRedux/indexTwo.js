const redux = require('redux');
const createStore = redux.legacy_createStore;
const combineReducer = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;

const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger();

const CAKE_ORDERED = 'CAKE_ORDERED';
const ICECREAM_ORDERED = 'ICECREAM_ORDERED';
function orderCake() {
    return {
        type: 'CAKE_ORDERED',
        qantity: 1
    }
}
function orderIceCreamOrder() {
    return {
        type: 'ICECREAM_ORDERED',
        qantity: 1
    }
}

const initialCakeState = { numOfCakes: 10 };
const initialIceCreameState = { numOfIceCreams: 20 };
const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            }
        default:
            return state;
    }
}
const iceCreamReducer = (state = initialIceCreameState, action) => {
    switch (action.type) {
        case ICECREAM_ORDERED:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams - 1
            }
        default:
            return state;
    }
}
const rootReducer = combineReducer({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})
const store = createStore(rootReducer, applyMiddleware(logger));
console.log('Initial state', store.getState());
const unsubscribe = store.subscribe(() => {})
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderIceCreamOrder());
store.dispatch(orderIceCreamOrder());
unsubscribe();