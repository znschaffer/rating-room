<script>
  export let rating;
  import { emotions } from '$lib/stores';
  
  const foundEmotion = ($emotions.find((emotion) => emotion._id === rating.emotion._ref)).name

  const { container, emotion } = {
    container: 'border border-black h-36 m-16 mt-0 mb-4 flex ',
    emotion: 'w-56 bg-gray-100 flex flex-col items-center p-2 justify-between h-full'
  }
</script>

<div class={container}>
  <div class={emotion}>
  <img src='/'/>
  {foundEmotion}
</div>
  

</div>