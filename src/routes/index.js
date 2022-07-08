console.log('hello');
import { client } from '$lib/sanityClient';
/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get() {
	const query = '*[_type == "product"]';
	const data = await client.fetch(query);

	if (data) {
		return {
			status: 200,
			body: {
				data: data
			}
		};
	}

	return {
		status: 404
	};
}
