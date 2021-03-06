import { call, take } from 'redux-saga/effects';

const takeFirst = function* takeFirst(pattern, saga, ...args) {
	while (true) {
		const action = yield take(pattern);

		yield call(saga, ...args.concat(action));
	}
};

export default takeFirst;
