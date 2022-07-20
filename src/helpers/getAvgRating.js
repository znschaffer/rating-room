/**
 * @param {rating[]} ratings An array of ratings
 * @returns {number} Average rating
 */
export const getAvgRating = (ratings) => {
  if (!ratings) return 0;
	if (ratings.length === 1) return ratings[0].rating;
	else return ratings.reduce((prev, curr) => prev.rating + curr.rating) / ratings.length;
};
