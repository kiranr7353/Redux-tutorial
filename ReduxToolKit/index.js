const { cakeActions } = require('./app/features/cake/cakeSlice');
const { icecreamActions } = require('./app/features/icecream/icecreamSlice');
const { fetchUsers } = require('./app/features/user/userSlice');
const store = require('./app/store');

// console.log('Initial State:', store.getState());
// const unsubscribe = store.subscribe(() => {
//     // console.log('Updating state:', store.getState());
// })

// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.restocked(3))

// store.dispatch(icecreamActions.ordered())
// store.dispatch(icecreamActions.ordered())
// store.dispatch(icecreamActions.ordered())
// store.dispatch(icecreamActions.restocked(2))

store.dispatch(fetchUsers)
