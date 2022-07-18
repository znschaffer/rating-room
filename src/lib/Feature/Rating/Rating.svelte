<script>
	export let rating;
	import { emotions } from '$lib/stores';
	console.log(rating.rating);
	let foundEmotion;

	if (rating.emotion) {
		foundEmotion = $emotions.find((emotion) => emotion._id === rating.emotion._ref).name;
	}

	let stars = [];

	for (let i = 0; i < rating.rating; i++) {
		stars.push('⭐');
	}

	const { container, emotion, details, name, comments, ratingStars, spacer } = {
		container: 'border border-1 border-black h-full min-h-36 m-16 mt-0 mb-4 flex ',
		emotion: 'w-56 flex-shrink-0 bg-gray-100 flex flex-col items-center p-2 justify-between h-100',
		details: 'flex flex-col p-4',
		name: 'text-xl font-bold',
		comments: 'text-sm pt-2',
		ratingStars: 'mt-auto',
		spacer: 'h-8'
	};
</script>

<div class={container}>
	{#if foundEmotion}
		<div class={emotion}>
			<img src="/" />
			{foundEmotion}
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
