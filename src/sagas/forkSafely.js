import { fork, takeEvery, takeLatest, throttle } from 'redux-saga/effects';
import takeLatestPerKey from './takeLatestPerKey';
import wrapSagaSafely from './wrapSagaSafely';

const sagaHelpers = [takeEvery, takeLatest, takeLatestPerKey];

const forkSafely = (sagaHelper, ...args) => {
	if (sagaHelper === throttle) {
		const [ms, fn, pattern, saga, ...rest] = args;

		return fork(sagaHelper, ms, fn, pattern, wrapSagaSafely(saga), ...rest);
	} else if (sagaHelpers.includes(sagaHelper)) {
		const [pattern, saga, ...rest] = args;

		return fork(sagaHelper, pattern, wrapSagaSafely(saga), ...rest);
	}

	return fork(wrapSagaSafely(sagaHelper), ...args);
};

export default forkSafely;
