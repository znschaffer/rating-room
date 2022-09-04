import type { Rating } from '$types';

/** Average of all ratings of a product */
export const avgRating = (ratings: Rating[]): number => {
	if (!ratings) return 0;
	if (ratings.length === 1) return ratings[0].rating;
	else return ratings.reduce((total, curr) => total + curr.rating, 0) / ratings.length;
};
