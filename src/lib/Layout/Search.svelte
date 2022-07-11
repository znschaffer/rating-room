<script>
	import { products, productsView } from '$lib/stores';
	import normalize from '$helpers/normalize';

	const searchProducts = (e) => {
		productsView.set(
			$products.filter((product) => normalize(product.name).includes(normalize(e.target.value)))
		);
	};

	const { container, input } = {
		container: 'h-16 ml-auto mr-auto',
		input: 'outline outline-1 w-36 focus:outline-blue-600 p-1 text-sm'
	};
</script>

<div class={container}>
	<input on:input={searchProducts} class={input} placeholder="search" />
</div>
