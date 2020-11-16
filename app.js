// no modules!
const redux = require('redux');
const initialState = require('./redux/initialState');
const rootReducer = require('./redux/reducers/rootReducer');
const { updateUserName } = require('./redux/action-creators/user');

const store = redux.createStore(rootReducer, initialState);

store.subscribe(() => {
  console.log(store.getState());
})

store.dispatch(updateUserName('Tapacc'));

