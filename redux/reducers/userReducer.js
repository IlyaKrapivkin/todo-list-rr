const userReducer = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_USER_NAME":
      return {
        ...state,
        name: action.payload
      }
    case "UPDATE_USER_AGE":
      return {
        ...state,
        age: action.payload
      }
    case "UPDATE_USER":
    return {
      ...action.payload
    }
    default:
      return state;
  }
}

module.exports = userReducer;
