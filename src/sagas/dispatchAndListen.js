import { all, put, race, take } from 'redux-saga/effects';

const dispatchAndListen = function* dispatchAndListen(actions, successTypes, failureTypes) {
	const raceTypes = {
		failure: failureTypes ? race(failureTypes.map((type) => take(type))) : undefined,
		success: all(successTypes.map((type) => take(type))),
	};
	const [result] = yield all([race(raceTypes), all(actions.map((action) => put(action)))]);

	return result;
};

export default dispatchAndListen;
