import client from 'part:@sanity/base/client';
import groq from 'groq';

const isUniqueTag = (tag, context) => {
	const { document } = context;

	const id = document._id.replace(/^drafts\./, '');

	const params = {
		draft: `drafts.${id}`,
		published: id,
		tag
	};
	/* groq */
	const query = groq`!defined(*[
    _type == 'tag' &&
    !(_id in [$draft, $published]) &&
    name == $tag
  ][0]._id)`;

	return client.fetch(query, params);
};
export default {
	title: 'Tags',
	name: 'tag',
	type: 'document',
	fields: [
		{
			title: 'Tag name',
			name: 'name',
			type: 'string',
			validation: (Rule) =>
				Rule.custom(async (value, context) => {
					const isUnique = await isUniqueTag(value, context);
					if (!isUnique) return 'Tag is not unique';
					return true;
				})
		},
		{
			title: 'Image',
			name: 'image',
			type: 'image'
		}
	]
};
