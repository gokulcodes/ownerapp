import { assign } from 'lodash';
import * as Types from '../constants/actionTypes';

const initialState = {
	jobInfo: {}
};

const OwnerReducer = (state = initialState, action) => {
	switch (action.type) {
	case Types.JOB_INFO:
		return assign({}, state, {
			jobInfo: action.jobInfo
		});
	default:
		return assign({}, state, {
			jobInfo: action.jobInfo
		});
	}
};

export default OwnerReducer;