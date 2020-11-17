import { createStore } from 'redux';
import initState from './initState';
import rootReducer from './reducers/rootReducer';
// import { composeWithDevTools } from 'redux-devtools-extension';

// const store = createStore(rootReducer, initState(), composeWithDevTools());

// store.subscribe(() => {
//   localStorage.setItem('store', JSON.stringify(store.getState()));
// });

const store = createStore(rootReducer, initState());

store.subscribe(() => {
  localStorage.setItem('store', JSON.stringify(store.getState()));
});
export default store;
