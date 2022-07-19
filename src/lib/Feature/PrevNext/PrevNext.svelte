<script>
	import { currentProduct } from '$lib/stores';
  import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
  import ArrowRightIcon from '@mui/icons-material/ArrowRight';

	const { container } = {
		container: 'flex justify-between'
	};
</script>

<div class={container} >
<ArrowLeftIcon /> <ArrowRightIcon />
</div>
