export default {
	title: 'Emotions',
	name: 'emotion',
	type: 'document',
	description: 'Emotions that our main characters can display',
	fields: [
		{
			title: 'Emotion name',
			name: 'name',
			type: 'string'
		},
    {
      title: 'Description',
      name: 'description',
      type: 'text'
    },
    {
      title: 'Zane image',
      name: 'zane',
      type: 'image'
    },
    {
      title: 'Xinrui image',
      name: 'xyn',
      type: 'image'
    },
	],
  preview: {
    select: {
      title: 'name',
      subtitle: 'description'
    }
  }
};
