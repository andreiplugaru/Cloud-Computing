<script lang="ts">
	import { user } from '../../stores/user';
	import { createPost } from '../../stores/post';
	import type { Post } from '../../models/Post';
	import { goto } from '$app/navigation';

	$: userLoggedIn = $user !== null;
	$: showError = errorMessage !== '';
	let title = '';
	let content = '';
	let errorMessage = '';
	async function addPost(event: Event) {
		event.preventDefault();
		let post: Post = {} as Post;
		post.title = title;
		post.content = content;
		post.userId = $user._id;
		let result = await createPost(post);
		if (result.ok == true) {
			title = '';
			content = '';
			errorMessage = '';
			await goto("/home");

		} else {
			errorMessage = (await result.json()).message;
		}
	}
</script>
{#if userLoggedIn === false}
	<div class="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 h-min self-center">
		<p class="text-center">You must be logged in to create a post</p>
	</div>
	{:else }
<div class="mx-auto bg-white shadow-md rounded-lg p-6 h-min self-center w-[600px]">
	<form>
		<div class="mb-4">
			<label for="title" class="block text-gray-700 font-bold mb-2">Title</label>
			<input type="text" id="title" name="title" placeholder="Enter title" bind:value={title} class="border rounded-lg px-4 py-2 w-full" required>
		</div>
		<div class="mb-4">
			<label for="content" class="block text-gray-700 font-bold mb-2">Content</label>
			<textarea id="content" name="content" placeholder="Enter content" bind:value={content} class="border rounded-lg px-4 py-2 w-full" required></textarea>
		</div>
		{#if showError}
			<p class="text-red-500 text-xs italic">{errorMessage}</p>
		{/if}
		<button type="submit"  class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" on:click={addPost}>Add post</button>

	</form>
</div>
	{/if}
