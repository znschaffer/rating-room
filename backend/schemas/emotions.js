import client from 'part:@sanity/base/client';
import groq from 'groq';

const isUniqueEmotion = (emotion, context) => {
	const { document } = context;

	const id = document._id.replace(/^drafts\./, '');

	const params = {
		draft: `drafts.${id}`,
		published: id,
		emotion
	};
	/* groq */
	const query = groq`!defined(*[
    _type == 'emotion' &&
    !(_id in [$draft, $published]) &&
    name == $emotion
  ][0]._id)`;

	return client.fetch(query, params);
};

export default {
	title: 'Emotions',
	name: 'emotion',
	type: 'document',
	description: 'Emotions that our main characters can display',
	fields: [
		{
			title: 'Emotion name',
			name: 'name',
			type: 'string',
			validation: (Rule) =>
				Rule.custom(async (value, context) => {
					const isUnique = await isUniqueEmotion(value, context);
					if (!isUnique) return 'Emotion is not unique';
					return true;
				})
		},
		{
			title: 'Description',
			name: 'description',
			type: 'text'
		},
		{
			title: 'Emotion Image',
			name: 'image',
			type: 'image'
		}
	],
	preview: {
		select: {
			title: 'name',
			subtitle: 'description'
		}
	}
};
