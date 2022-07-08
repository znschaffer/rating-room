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
        type: 'string',
        options: {
          list: [
            { title: 'Product', value: 'product' },
            { title: 'Food', value: 'food' },
            { title: 'Hobby', value: 'hobby' },
            { title: 'Media', value: 'media' },
            { title: 'Concept', value: 'concept' },
            { title: 'Feeling', value: 'feeling' },
            { title: 'Exercise', value: 'exercise' }
          ]
        }
      }]

		},
		{
			title: 'Description of Product',
			name: 'description',
			type: 'text'
		},
		{
			title: 'Ratings',
			name: 'ratings',
			type: 'array',
			of: [{ type: 'reference',
             to: [{ type: 'rating' }],
             disableNew: false 
            }],
		}
	]
};
