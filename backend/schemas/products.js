const ratings = {
	title: 'Ratings',
	name: 'rating',
	type: 'array',
	of: [
		{
			type: 'object',
			fields: [
				{
					title: 'Rater Name',
					name: 'name',
					type: 'string',
					validation: (Rule) => Rule.required(),
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
					validation: (Rule) => Rule.required()
				},
				{
					title: 'Comments',
					name: 'comments',
					type: 'text'
				},
				{
					title: 'Emotion',
					name: 'emotion',
					type: 'reference',
					to: [{ type: 'emotion' }],
					initialValue: { _ref: '3a9fcf71-2660-4b3e-80da-a4488dd5b3b8' }
				}
			],
			preview: {
				select: {
					title: 'name',
					subtitle: 'slug.current'
				}
			}
		}
	]
};

export default {
	title: 'Products',
	name: 'product',
	type: 'document',
	description: 'List of all rated products',
	preview: {
		select: {
			title: 'name',
			subtitle: 'description'
		}
	},
	fields: [
		{
			title: 'Name of Product',
			name: 'name',
			type: 'string',
			validation: (Rule) => Rule.required()
		},
		{
			title: 'Manufacturer',
			name: 'subname',
			type: 'string'
		},
		{
			title: 'Product URL',
			name: 'url',
			type: 'url'
		},
		{
			title: 'Upload an Image',
			name: 'image',
			type: 'image'
		},
		{
			title: 'Select Tags',
			name: 'tags',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: [{ type: 'tag' }]
				}
			]
		},
		{
			title: 'Description of Product',
			name: 'description',
			type: 'text'
		},
		ratings
	]
};
