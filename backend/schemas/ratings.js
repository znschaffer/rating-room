export default {
	title: 'Ratings',
	name: 'rating',
	type: 'document',
    fields: [
		{
			title: 'Rater Name',
			name: 'name',
			type: 'string',
            validation: Rule => Rule.required(),
			options: {
				list: [
					{ title: 'Xinrui', value: 'xyn' },
					{ title: 'Zane', value: 'zane' }
				]
			}
		},
		{
			title: 'Rating Number',
			name: 'rating',
			type: 'number',
			options: {
				list: [
					{ title: '⭐', value: 1 },
					{ title: '⭐⭐', value: 2 },
					{ title: '⭐⭐⭐', value: 3 },
					{ title: '⭐⭐⭐⭐', value: 4 },
					{ title: '⭐⭐⭐⭐⭐', value: 5 }
				]
			},
            validation: Rule => Rule.required()
		},
		{
			title: 'Emotion',
			name: 'emotion',
			type: 'string',
			options: {
				list: [
					{ title: 'Shocked', value: 'shocked' },
					{ title: 'Confused', value: 'confused' },
					{ title: 'Neutral', value: 'neutral' },
					{ title: 'Excited', value: 'excited' },
					{ title: 'Tired', value: 'tired' },
					{ title: 'Sweaty', value: 'sweaty' },
					{ title: 'Eating', value: 'eating' },
                    { title: 'Angry', value: 'angry' },
				]
			},
            initialValue: {title: 'Neutral', value: 'neutral', _type: 'string'},
            validation: Rule => Rule.required()
		},
        {
            title: 'Comments',
            name: 'comments',
            type: 'text'
        },
        {
            title: 'Rating Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: (doc) => `${doc.name}_${doc.rating}_${doc.emotion}_${doc._id.slice(-6)}`
            }
        },
        {
            title: 'Product',
            name: 'product',
            type: 'reference',
            weak: true,
            to: [{type: 'product'}]
        }
	],
    preview: {
        select: {
            title: 'slug.current',
            subtitle: 'product._ref'
        }
    },

};
