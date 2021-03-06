import { combineReducers } from 'redux';

const createReducer = (models) =>
	combineReducers(
		Object.keys(models).reduce((accumulator, key) => {
			if (models[key].reducer) {
				accumulator[key] = models[key].reducer;
			}

			return accumulator;
		}, {}),
	);

export default createReducer;
