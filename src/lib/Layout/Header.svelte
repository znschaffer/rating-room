<script>
	export let reset;
	const { title } = {
		title: 'text-lg font-bold p-12 pl-12 pt-11 snap-start sticky top-0 bg-white h-28 shadow-sm shadow-white'
	};
</script>

<a href="/" class={title} on:click={reset}> Rating Room </a>

<style>

	a:hover {
		background-image: url('dither.gif');
		background-repeat: repeat;
	}
</style>