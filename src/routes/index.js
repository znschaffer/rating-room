console.log('hello');
import { client } from '$lib/sanityClient';
/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get() {
	const products = await client.fetch('*[_type == "product"]');
	const tags = await client.fetch('*[_type == "tag"]');

	const data = {
		products,tags
	}

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
