const redux = require('redux');
const userReducer = require('./userReducer');
const carReducer = require('./carReducer');

const rootReducer = redux.combineReducers({
  user: userReducer,
  car: carReducer
})

module.exports = rootReducer;
