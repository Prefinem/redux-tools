import withRetry from './withRetry';

const keepAlive = withRetry({
	retryAttempts: Infinity,
	retryStrategy: 'immediate',
});

export default keepAlive;
