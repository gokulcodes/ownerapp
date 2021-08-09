import { combineReducers } from 'redux';
import OwnerReducer from './OwnerReducer';

const appReducer = combineReducers({ OwnerReducer });

const rootReducer = (state, action) => {
	return appReducer(state, action);
};

export default rootReducer;