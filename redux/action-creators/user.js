const TYPES = require('../action-types')

const updateUserName = (name) => {
  return {
    type: TYPES.UPDATE_USER_NAME,
    payload: name
  }
}

const updateUserAge = (age) => {
  return {
    type: TYPES.UPDATE_USER_AGE,
    payload: age
  }
}

const updateUser = (name = '', age = '') => {
  return {
    type: TYPES.UPDATE_USER,
    payload: {
      name,
      age
    }
  }
}

module.exports = {
  updateUserName,
  updateUserAge,
  updateUser
}
