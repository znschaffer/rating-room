import { client } from '$lib/sanityClient';
/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET() {
	const products = await client.fetch('*[_type == "product"]');
	const tags = await client.fetch('*[_type == "tag"]');
	const emotions = await client.fetch('*[_type == "emotion"]');

	const data = {
		products,
		tags,
		emotions
	};

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
