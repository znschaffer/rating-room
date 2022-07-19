import { getAvgRating } from '$helpers/getAvgRating.js';

test('return false if no ratings are passed', async () => {
	expect(getAvgRating()).toBeFalsy();
});
