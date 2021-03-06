/* global navigator */

const backupStorageData = {};

export const backupStorage = {
	clear: () => {
		Object.keys(backupStorageData).forEach((key) => {
			delete backupStorageData[key];
		});
	},
	getItem: (key) => backupStorageData[key] || null,
	removeItem: (key) => {
		delete backupStorageData[key];
	},
	setItem: (key, value) => {
		backupStorageData[key] = value;
	},
};

export const platforms = {
	BROWSER: 'BROWSER',
	NODE: 'NODE',
	REACT_NATIVE: 'REACT_NATIVE',
};

export const getPlatform = () => {
	if (typeof document !== 'undefined') {
		return platforms.BROWSER;
	} else if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
		return platforms.REACT_NATIVE;
	}

	return platforms.NODE;
};

export const snakeToCamelCase = (str) => str.toLowerCase().replace(/_\w/gu, (match) => match[1].toUpperCase());

export default {
	backupStorage,
	getPlatform,
	platforms,
	snakeToCamelCase,
};
