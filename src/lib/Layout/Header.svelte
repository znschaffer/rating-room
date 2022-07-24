<script>
	export let reset;
	const { title } = {
		title: 'text-lg font-bold p-12 pl-12 pt-11 snap-start sticky top-0 bg-white h-28 shadow-sm shadow-white'
	};
</script>

<a href="/" class={title} on:click={reset}> Rating Room </a>

<style>
		@keyframes shake {
  from {background-image:url('dither.png')}
  to {background-image:url('dither2.png')}
}
	a:hover {
		background-blend-mode: color dodge;
		animation: shake 0.4s infinite;
	}
</style>