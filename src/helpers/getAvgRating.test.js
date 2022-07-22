import { getAvgRating } from '$helpers/getAvgRating.js';

let testRating1 = {
	_key: '5a80f4748d91',
	comments: 'The new one seems pretty good but my old one died and got sticky.',
	emotion: { _ref: '633f8d5f-897a-461f-a817-ee910f6ad614', _type: 'reference' },
	name: 'xyn',
	rating: 4
};

let testRating2 = {
	_key: '5a80f4748d91',
	comments: 'This is a fake comment for testing, wahoo',
	emotion: { _ref: '633f8d5f-897a-461f-a817-ee910f6ad614', _type: 'reference' },
	name: 'zane',
	rating: 3
};

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
