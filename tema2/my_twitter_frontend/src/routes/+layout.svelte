<script>
	import '../app.pcss';
	import UserControl from '../components/UserControl.svelte';
</script>

<main  class="flex flex-row justify-between w-full relative min-h-screen">
		<slot/>
	<UserControl/>
</main>
