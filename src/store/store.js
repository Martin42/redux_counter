import { createStore } from 'redux'
import counterReducer from '../components/counterReducer';

const store = createStore(
  counterReducer
)


export default store;