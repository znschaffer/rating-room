<script>
	import { urlFor } from '../../sanityClient';
	export let rating;
	import { emotions } from '$lib/stores';
	let foundEmotion;

	if (rating.emotion) {
		foundEmotion = $emotions.find((emotion) => emotion._id === rating.emotion._ref);
	}

	let stars = [];

	for (let i = 0; i < rating.rating; i++) {
		stars.push('⭐');
	}

	const { container, emotion, emotionName, details, name, comments, ratingStars, spacer, img } = {
		container:
			'border border-1 border-black h-full min-h-36 mx-6 mb-2 sm:m-16 sm:mt-0 sm:mb-4 flex w-100',
		emotion:
			'hidden sm:flex w-56 flex-shrink-0 bg-gray-100 flex flex-col items-center p-2 justify-evenly h-100',
		emotionName: 'text-sm',
		details: 'flex flex-col p-4',
		name: 'text-xl font-bold',
		comments: 'text-sm pt-2',
		ratingStars: 'mt-auto',
		spacer: 'h-8',
		img: 'w-28 h-28 mt-2 '
	};
</script>

<div class={container}>
	{#if foundEmotion}
		<div class={emotion}>
			<img src={urlFor(foundEmotion.image).url()} alt={foundEmotion.name} class={img} />
			<p class={emotionName}>{foundEmotion.name}</p>
		</div>
	{/if}
	<div class={details}>
		<span class={name}>{rating.name} </span>
		{#if rating.comments}
			<p class={comments}>"{rating.comments}"</p>
		{/if}
		<div class={spacer} />
		<p class={ratingStars}>{stars.join('')}</p>
	</div>
</div>

<style>
	img {
		image-rendering: pixelated;
	}
</style>
