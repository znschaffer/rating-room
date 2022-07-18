const ratings = {
	title: 'Ratings',
	name: 'rating',
	type: 'array',
    of: [
        {
            type: 'object', fields: [
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
            title: 'Comments',
            name: 'comments',
            type: 'text'
        },
         {
            title: 'Rating Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: (doc, {parent}) => {
                    console.log(doc, parent)
                    return `${parent.name}_${parent.rating}_${doc.name}_${doc._id.slice(-6)}`}
            }
         },
        {
            title: 'Emotion',
            name: 'emotion',
            type: 'reference',
            to: [{type: 'emotion'}]
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
			title: 'Upload an Image',
			name: 'image',
			type: 'image'
		},
		{
			title: 'Select Tags',
			name: 'tags',
			type: 'array',
      of: [{
        type: 'reference',
        to: [{type: 'tag'}]
      }]

		},
		{
			title: 'Description of Product',
			name: 'description',
			type: 'text'
		},
    ratings,

	]
};
