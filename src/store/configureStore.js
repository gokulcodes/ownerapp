import {compose, applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducer/reducerCouple';

const enhancer = compose(applyMiddleware(thunk));
const configStore = createStore(rootReducer, {}, enhancer);
export default configStore;