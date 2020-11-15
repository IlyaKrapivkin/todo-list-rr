// no modules!
const redux = require('redux');

const initialState = {
  user: {
    name: '',
    age: ''
  },
  car: {
    brand: '',
    model: ''
  }
}

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_USER_NAME":
      return {
        ...state,
        user: {
          ...state.user,
          name: action.payload
        }
      }
      case "UPDATE_USER_AGE":
        return {
          ...state,
          user: {
            ...state.user,
            age: action.payload
          }
        }
      default:
        return state;
  }
}

const store = redux.createStore(reducer, initialState);

store.subscribe(() => {
  console.log(store.getState());
})
// 01
const actionUpdateName = {
  type: "UPDATE_USER_NAME",
  payload: "Tapac"
}

store.dispatch(actionUpdateName);
// 02
const actionUpdateAge = {
  type: "UPDATE_USER_AGE",
  payload: "15"
}

store.dispatch(actionUpdateAge);
