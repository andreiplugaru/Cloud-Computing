<script lang="ts">
	import type { Post } from '../models/Post';
	import {user} from '../stores/user';
	import { deletePost,hasCurrentUserLikedPost, likePost, dislikePost,getAiScoreForPost } from '../stores/post';
	export let post: Post;
	export let promise = Promise.resolve(-1);

	function removePost() {
		deletePost(post._id)
	}
	const _likePost = async () => {
		await likePost(post._id)
	}
	const _dislikePost = async () => {
		await dislikePost(post._id)
	}
	
	const _getAiScoreForPost = async () => {
		promise = getAiScoreForPost(post._id)
	}
	
</script>
<div class="bg-white shadow-md rounded-lg p-4 h-min m-2">
	<h2 class="text-3xl font-semibold text-gray-900 mb-2">{post.title}</h2>
	<p class="text-gray-800 mb-2 text-xl">{post.content}</p>
	<div class="flex items-center justify-between text-gray-500">
		<div class="flex items-center space-between">
			<span class="m">{post.likes.length}</span>
			<i class="fa-solid fa-thumbs-up m-1"></i>
			{#if $user !== null}
				{#if hasCurrentUserLikedPost(post._id)}
				<button class="bg-blue-500 text-white px-2 py-1 rounded-md text-right" on:click={_dislikePost}>Dislike</button>
				{:else}
					<button class="bg-blue-500 text-white px-2 py-1 rounded-md text-right" on:click={_likePost}>Like</button>
				{/if}
			{/if}
		</div>

		<div>
			{#await promise}
				<p>Loading...</p>
			{:then aiScore}
				<p class={"text-gray-500 text-right " + (aiScore === -1 ? "hidden" : "")}>Ai score: {aiScore * 100 | 0}%
					{#if aiScore > 0.5}
					<i class="fa-solid fa-robot"></i>
				{:else }
					<i class="fa-solid fa-person"></i>
				{/if}</p>


			{:catch error}
				<p class="text-red-500">Error: {error.message}</p>
			{/await}
			<button on:click={_getAiScoreForPost} class="bg-blue-500 text-white px-2 py-1 rounded-md text-right">Get ai score for post content</button>
		<br/>
			{#if $user !== null && $user._id === post.userId}
				<button class="bg-red-500 text-white px-2 py-1 rounded-md text-right mt-1" on:click={removePost}>Delete</button>
			{/if}
		</div>
	</div>

</div>