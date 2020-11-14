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
      default:
        return state;
  }
}

const store = redux.createStore(reducer, initialState);

store.subscribe(() => {
  console.log(store.getState());
})


store.dispatch({
  type: "UPDATE_USER_NAME",
  payload: "Tapac"
})
