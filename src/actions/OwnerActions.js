
import * as types from '../constants/actionTypes';

export const jobInfo = (callback) => {
	return dispatch => {
		dispatch({
			type: types.JOB_INFO,
			jobInfo: {title: 'Job Accepted'}
		});
		if(callback){
			callback(200);
		}
	};
};
