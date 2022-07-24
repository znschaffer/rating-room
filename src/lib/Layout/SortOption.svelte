<script>
	export let option;
	export let sort;
	let current = true;

	const { sortOption, noPointer } = {
		sortOption: 'flex p-1 pl-9 mr-12 w-full flex justify-between',
		noPointer: 'pointer-events-none'
	};
</script>

<button
	class={sortOption}
	on:click={(e) => {
		sort(e.target.name, current);
		current = !current;
	}}
	name={option}
>
	<p class={noPointer}>{option}</p>
	<p class={noPointer}>{current ? '▲' : '▼'}</p>
</button>

<style>
	@keyframes shake {
  from {background-image:url('dither.png')}
  to {background-image:url('dither2.png')}
}
	button:hover {
		background-blend-mode: color dodge;
		animation: shake 0.4s infinite;
	}
</style>
