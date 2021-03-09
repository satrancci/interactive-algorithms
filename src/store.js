import thunk from 'redux-thunk';
import reducers from './reducers';
import { createStore, applyMiddleware } from 'redux';

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
