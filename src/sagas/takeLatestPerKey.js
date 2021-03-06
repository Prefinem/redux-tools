/* eslint max-params: off, no-constant-condition: off*/
import { cancel, fork, take } from 'redux-saga/effects';

const takeLatestPerKey = (pattern, key, saga, ...args) =>
	fork(function* takeLatestPerKeyInternal() {
		const lastTasks = {};

		while (true) {
			const action = yield take(pattern);

			if (lastTasks[action.payload[key]]) {
				yield cancel(lastTasks[action.payload[key]]);
			}
			lastTasks[key] = yield fork(saga, ...args.concat(action));
		}
	});

export default takeLatestPerKey;
