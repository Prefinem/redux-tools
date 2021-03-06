import forkSafely from './../../sagas/forkSafely';

const extendSagas = (first, second) =>
	function* sagas() {
		yield forkSafely(first.sagas);
		yield forkSafely(second.sagas);
	};

export default extendSagas;
