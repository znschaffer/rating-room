import { getAvgRating } from '$helpers';
import { test, expect } from 'vitest';
import { testRating1, testRating2 } from './data';

test('return false if no parameters are passed', async () => {
	expect(getAvgRating()).toBeFalsy();
});

test('return false if array with empty object is passed', async () => {
	expect(getAvgRating([{}])).toBeFalsy();
});

test('return single rating if only one rating is passed', async () => {
	expect(getAvgRating([testRating1])).toBe(testRating1.rating);
});

test('return average of 2 ratings passed', async () => {
	expect(getAvgRating([testRating1, testRating2])).toBe(
		(testRating1.rating + testRating2.rating) / 2
	);
});
