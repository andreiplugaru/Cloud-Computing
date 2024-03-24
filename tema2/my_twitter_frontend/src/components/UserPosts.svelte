<script lang="ts">
	import { currentPosts } from '../stores/post';
	import Post from './Post.svelte';
</script>

<div class="flex flex-col grow">
	{#each $currentPosts as post (post._id)}
		<Post {post} />
	{/each}
</div>