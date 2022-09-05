import type { Product, Tag } from '$types';

export const testRating1 = {
	_key: '5a80f4748d91',
	comments: 'The new one seems pretty good but my old one died and got sticky.',
	emotion: { _ref: '633f8d5f-897a-461f-a817-ee910f6ad614', _type: 'reference' },
	name: 'xyn',
	rating: 4
};

export const testRating2 = {
	_key: '5a80f4748d91',
	comments: 'This is a fake comment for testing, wahoo',
	emotion: { _ref: '633f8d5f-897a-461f-a817-ee910f6ad614', _type: 'reference' },
	name: 'zane',
	rating: 3
};

export const testProducts = [
	{
		_createdAt: '2022-07-10T06:05:11Z',
		_id: 'bbfb664c-d8ff-4309-aa48-84b58517dbb7',
		_rev: 'xdVd0u8FwGu5JV7RvvMXfs',
		_type: 'product',
		_updatedAt: '2022-07-24T21:43:11Z',
		description:
			'The Stainless Mug keeps beverages hot or cold for hours with its high quality vacuum insulation and a tight fitted flip-open lid. Its SlickSteel® finish interior is corrosion resistant and repels stains.',
		image: {
			_type: 'image',
			asset: {
				_ref: 'image-4999e8d41ac93c86728bc4db193b6f5de04560f2-150x150-png',
				_type: 'reference'
			}
		},
		name: 'Stainless Mug',
		rating: [
			{
				_key: '82781a3abf4a',
				emotion: {
					_ref: 'd0235a09-160d-46d9-909c-b7277d30e4c8',
					_type: 'reference'
				},
				name: 'zane',
				rating: 5
			},
			{
				_key: 'a0ee17f0577e',
				comments: 'Weird toilet lip..',
				emotion: {
					_ref: 'a7b3fcb5-4cfd-4b33-8219-93a4debf4597',
					_type: 'reference'
				},
				name: 'xyn',
				rating: 3
			}
		],
		subname: 'Zojirushi',
		tags: [
			{
				_key: 'b0eeeddaada8',
				_ref: 'bf3fc6df-12e9-4347-aabb-4b9a44b65914',
				_type: 'reference'
			},
			{
				_key: 'b8719eb8f640',
				_ref: '8450090d-f35d-47bc-8c36-da709c8429c0',
				_type: 'reference'
			}
		],
		url: 'https://www.zojirushi.com/app/product/smkhe'
	},
	{
		_createdAt: '2022-07-08T04:34:57Z',
		_id: '3bb430c3-95b3-4202-81df-a0d02555b928',
		_rev: 'zJSgu1gZqjvXXlks6UK1PE',
		_type: 'product',
		_updatedAt: '2022-07-24T20:20:31Z',
		description:
			"AirPods Pro are wireless Bluetooth in-ear headphones designed by Apple, initially released on October 30, 2019. They are Apple's mid-range wireless headphones, sold alongside the base-level AirPods and highest-end AirPods Max. AirPods Pro use the H1 processor found in second-generation AirPods, but add active noise cancellation, transparency mode, automated frequency profile setting, IPX4 water resistance, a charging case with wireless charging, and interchangeable silicone tips.",
		image: {
			_type: 'image',
			asset: {
				_ref: 'image-e534db723298338b46ce0d715ec9eda6602de938-150x150-png',
				_type: 'reference'
			}
		},
		name: 'Airpods Pro',
		rating: [
			{
				_key: 'c88ae1c97985',
				comments:
					"After a year of use the left one keeps breaking randomly. I do use them all the time though and they're very useful for video calls.",
				emotion: {
					_ref: 'a7b3fcb5-4cfd-4b33-8219-93a4debf4597',
					_type: 'reference'
				},
				name: 'xyn',
				rating: 4
			},
			{
				_key: '23ab78a19149',
				emotion: {
					_ref: '2d365a23-b888-497a-8ea3-a88d2d807911',
					_type: 'reference'
				},
				name: 'zane',
				rating: 5
			}
		],
		subname: 'Apple',
		tags: [
			{
				_key: '2f5be6ed77a4',
				_ref: 'c9fd6af5-036a-4d1b-a64e-840d4bfb520b',
				_type: 'reference'
			},
			{
				_key: 'b66f8028c967',
				_ref: 'bf3fc6df-12e9-4347-aabb-4b9a44b65914',
				_type: 'reference'
			}
		],
		url: 'https://www.apple.com/airpods-pro/'
	},
	{
		_createdAt: '2022-07-11T20:19:52Z',
		_id: 'drafts.fed01265-c98c-48c4-be49-fdb87c619ea0',
		_rev: 'mtxoo5-07z-qyr-k20-6kylzzubv',
		_type: 'product',
		_updatedAt: '2022-07-24T17:49:43Z',
		description: 'Plastic pen from Muji',
		image: {
			_type: 'image',
			asset: {
				_ref: 'image-cda1aec0b86adf96888d0e1a94704e0787e1c461-150x150-png',
				_type: 'reference'
			}
		},
		name: 'Gel Ink Cap Ballpoint Pen 0.38mm',
		rating: [
			{
				_key: '3f4ddd5d8970',
				comments:
					'Used to be my go-to but they switched to a worse version of this pen. They are still okay but they are just okay.',
				emotion: {
					_ref: 'd7671522-e5a5-442a-aa8f-87cebae1a6e1',
					_type: 'reference'
				},
				name: 'xyn',
				rating: 3,
				slug: {
					_type: 'slug',
					current: 'xyn_3_muji-pen-0-38_619ea0'
				}
			}
		],
		subname: 'Muji',
		tags: [
			{
				_key: 'b61fcb55480c',
				_ref: '63227dcb-3967-492d-afe4-90e7157650e8',
				_type: 'reference'
			},
			{
				_key: 'aa9e2a91dc45',
				_ref: '31924538-cc2a-4c83-9b3c-a70d817385be',
				_strengthenOnPublish: {
					template: {
						id: 'tag'
					},
					type: 'tag'
				},
				_type: 'reference',
				_weak: true
			}
		],
		url: 'https://www.muji.us/products/gel-ink-cap-type-ballpoint-pen-0-38mm-10-pieces-set-9a63?refSrc=6787624992958&nosto=productpage-nosto-4-copy'
	}
] as Product[];

export const testTags = [
	{
		_createdAt: '2022-07-10T06:07:12Z',
		_id: '033beca9-6fef-445c-91dd-55f8ab480831',
		_rev: 'KpnZHIwJumnkYWqCgrFCoF',
		_type: 'tag',
		_updatedAt: '2022-07-23T23:21:38Z',
		image: {
			_type: 'image',
			asset: {
				_ref: 'image-1f6f99d469b298aeffee8f496d490c39ea32404a-150x150-png',
				_type: 'reference'
			}
		},
		name: 'Media'
	},
	{
		_createdAt: '2022-07-11T20:21:51Z',
		_id: '0574ab43-5ddf-433d-8c77-f92043e7d417',
		_rev: 'xdVd0u8FwGu5JV7Rvp9FQE',
		_type: 'tag',
		_updatedAt: '2022-07-23T23:20:24Z',
		image: {
			_type: 'image',
			asset: {
				_ref: 'image-42e2f1c867bd7e93e3b6669fb503031e50722d8d-150x150-png',
				_type: 'reference'
			}
		},
		name: 'Kitchen'
	},
	{
		_createdAt: '2022-07-09T19:26:25Z',
		_id: '08c933cc-25f3-44f2-b634-fdf1e38a6a53',
		_rev: 'KpnZHIwJumnkYWqCgrFCHk',
		_type: 'tag',
		_updatedAt: '2022-07-23T23:21:25Z',
		image: {
			_type: 'image',
			asset: {
				_ref: 'image-3440bc47e3cc84f475d9caa8223d31fc7c894e16-150x150-png',
				_type: 'reference'
			}
		},
		name: 'Snack'
	},
	{
		_createdAt: '2022-07-13T20:43:34Z',
		_id: '254f34a1-b2e8-444f-b8a9-bf8abd13c723',
		_rev: 'KpnZHIwJumnkYWqCgrF5sP',
		_type: 'tag',
		_updatedAt: '2022-07-23T23:20:02Z',
		image: {
			_type: 'image',
			asset: {
				_ref: 'image-5402198c979228987dd6b4aa8f70f1ef66d2268b-250x250-png',
				_type: 'reference'
			}
		},
		name: 'Pet'
	},
	{
		_createdAt: '2022-07-24T17:49:53Z',
		_id: '31924538-cc2a-4c83-9b3c-a70d817385be',
		_rev: 'zJSgu1gZqjvXXlks6TlBL4',
		_type: 'tag',
		_updatedAt: '2022-07-24T17:49:53Z',
		name: 'Art'
	},
	{
		_createdAt: '2022-07-24T17:46:25Z',
		_id: '40c024d2-789e-4eba-a0bb-e5c8e999d221',
		_rev: 'xdVd0u8FwGu5JV7RvuVBDW',
		_type: 'tag',
		_updatedAt: '2022-07-24T17:46:25Z',
		image: {
			_type: 'image',
			asset: {
				_ref: 'image-637e8af3973e2622ab33a6527c499c1931e8c590-150x150-png',
				_type: 'reference'
			}
		},
		name: 'Plant'
	},
	{
		_createdAt: '2022-07-24T17:47:26Z',
		_id: '55478d1b-6c92-43b1-a975-de4937ae9c4d',
		_rev: 'zJSgu1gZqjvXXlks6Tkf4k',
		_type: 'tag',
		_updatedAt: '2022-07-24T17:47:34Z',
		image: {
			_type: 'image',
			asset: {
				_ref: 'image-1c376102961ede7bc846039687e38ebfc0658647-250x250-png',
				_type: 'reference'
			}
		},
		name: 'Audio'
	},
	{
		_createdAt: '2022-07-11T20:18:45Z',
		_id: '63227dcb-3967-492d-afe4-90e7157650e8',
		_rev: 'xdVd0u8FwGu5JV7Rvp9I3k',
		_type: 'tag',
		_updatedAt: '2022-07-23T23:20:33Z',
		image: {
			_type: 'image',
			asset: {
				_ref: 'image-542c565ad4383cb54f3b379ebba2524a8216dbf1-150x150-png',
				_type: 'reference'
			}
		},
		name: 'Tool'
	},
	{
		_createdAt: '2022-07-09T19:22:52Z',
		_id: '844cb9fa-20bb-4538-8f87-89cf78cd8d79',
		_rev: 'xdVd0u8FwGu5JV7Rvp9kmk',
		_type: 'tag',
		_updatedAt: '2022-07-23T23:23:11Z',
		image: {
			_type: 'image',
			asset: {
				_ref: 'image-7cec9630e7553cbe4b1640d2c1efa424891a076f-250x250-png',
				_type: 'reference'
			}
		},
		name: 'Food'
	},
	{
		_createdAt: '2022-07-18T02:26:49Z',
		_id: '8450090d-f35d-47bc-8c36-da709c8429c0',
		_rev: 'KpnZHIwJumnkYWqCgrF4Zg',
		_type: 'tag',
		_updatedAt: '2022-07-23T23:19:42Z',
		image: {
			_type: 'image',
			asset: {
				_ref: 'image-a13abac8f01dea0eeb7a90c2ed27a2bf0473cde4-250x250-png',
				_type: 'reference'
			}
		},
		name: 'Exercise'
	},
	{
		_createdAt: '2022-07-11T20:22:26Z',
		_id: '9da76dad-54f5-41b7-9ac4-ef9ca4cd98fa',
		_rev: 'xdVd0u8FwGu5JV7Rvp9CvY',
		_type: 'tag',
		_updatedAt: '2022-07-23T23:20:18Z',
		image: {
			_type: 'image',
			asset: {
				_ref: 'image-830e3c41efe9ff311c3878cfe2084f4a3b8a65c4-150x150-png',
				_type: 'reference'
			}
		},
		name: 'Beauty'
	},
	{
		_createdAt: '2022-07-10T20:44:31Z',
		_id: 'a170de12-063f-4169-baf4-6554dd978d74',
		_rev: 'vuhZ16vkI3F39Jo15ORloS',
		_type: 'tag',
		_updatedAt: '2022-07-11T20:12:17Z',
		image: {
			_type: 'image',
			asset: {
				_ref: 'image-e592f3da547dd3a4179f29be7ab31920e16ac3e5-250x250-png',
				_type: 'reference'
			}
		},
		name: 'Entertainment'
	},
	{
		_createdAt: '2022-07-10T15:58:28Z',
		_id: 'bf3fc6df-12e9-4347-aabb-4b9a44b65914',
		_rev: 'zJSgu1gZqjvXXlks6TkquC',
		_type: 'tag',
		_updatedAt: '2022-07-24T17:48:30Z',
		image: {
			_type: 'image',
			asset: {
				_ref: 'image-dc9154d84167790e8340a888cacfd25f74bacb53-250x250-png',
				_type: 'reference'
			}
		},
		name: 'Accessory'
	},
	{
		_createdAt: '2022-07-09T19:28:13Z',
		_id: 'c9fd6af5-036a-4d1b-a64e-840d4bfb520b',
		_rev: 'KpnZHIwJumnkYWqCgrFCZZ',
		_type: 'tag',
		_updatedAt: '2022-07-23T23:21:32Z',
		image: {
			_type: 'image',
			asset: {
				_ref: 'image-b084b7abeaed7bcd928539ac52841425f8cee197-250x250-png',
				_type: 'reference'
			}
		},
		name: 'Electronics'
	},
	{
		_createdAt: '2022-07-10T15:57:43Z',
		_id: 'cf99bade-204c-45c2-80b1-262ab77e8092',
		_rev: 'zJSgu1gZqjvXXlks6NXLra',
		_type: 'tag',
		_updatedAt: '2022-07-23T23:21:46Z',
		image: {
			_type: 'image',
			asset: {
				_ref: 'image-37fa158d7ad4b5eb8213524845dbe1b254402d60-150x150-png',
				_type: 'reference'
			}
		},
		name: 'Alcohol'
	},
	{
		_createdAt: '2022-07-10T16:20:23Z',
		_id: 'dccb56bb-7ccc-4638-9606-755a6be19f77',
		_rev: 'zJSgu1gZqjvXXlks6NWhA6',
		_type: 'tag',
		_updatedAt: '2022-07-23T23:19:54Z',
		image: {
			_type: 'image',
			asset: {
				_ref: 'image-cd17466d49aaee4d4ec97e1cbc19bccd0c8d793f-150x150-png',
				_type: 'reference'
			}
		},
		name: 'Appliance'
	},
	{
		_createdAt: '2022-07-10T15:58:09Z',
		_id: 'feb491f3-2048-49fb-9212-c04adc624e8b',
		_rev: 'KpnZHIwJumnkYWqCgrFDfi',
		_type: 'tag',
		_updatedAt: '2022-07-23T23:21:55Z',
		image: {
			_type: 'image',
			asset: {
				_ref: 'image-41e91dece1cca7e49ee71ede8bcdb4a66f2b2815-150x150-png',
				_type: 'reference'
			}
		},
		name: 'Drink'
	}
] as Tag[];
