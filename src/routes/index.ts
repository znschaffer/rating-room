// import { client } from '$lib/sanityClient';
// import type { Product, Tag, Emotion } from '$types';

export {};
// type dataType = {
// 	products: Product[],
// 	tags: Tag[],
// 	emotions: Emotion[]
// }

// export async function GET() {
// 	const products = await client.fetch('*[_type == "product"]');
// 	const tags = await client.fetch('*[_type == "tag"]');
// 	const emotions = await client.fetch('*[_type == "emotion"]');

// 	const data:dataType = {
// 		products,
// 		tags,
// 		emotions
// 	};

// 	if (data) {
// 		return {
// 			status: 200,
// 			body: {
// 				data: data
// 			}
// 		};
// 	}

// 	return {
// 		status: 404
// 	};
// }
