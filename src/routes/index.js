console.log('hello');
import { client } from '$lib/sanityClient';

export async function get() {
	const products = '*[_type == "product"]';
	const data = await client.fetch(products);

	if (data) {
		return {
			status: 200,
			body: {
                products: data
			}
		};
	}

	return {
		status: 404
	};
}
