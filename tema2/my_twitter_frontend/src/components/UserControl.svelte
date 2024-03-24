<script lang="ts">
	import { user } from '../stores/user';
	import { get } from 'svelte/store';

	$: userLoggedIn = $user !== null;
	function logout() {
		user.set(null);
	}
</script>

<div class="shadow-2xl p-3 h-min rounded-xl bg-clip-border bg-white min-w-[170px]" style="margin-left: auto">
	{#if userLoggedIn}
		<p>Hello, {get(user)?.name}</p>
		<p>You can add post <a href="/add-post" class="text-indigo-400">here</a></p>
		<a on:click = {logout} href = "#" class="text-red-500">Logout</a>

	{:else}
		<a href="/login" class="text-green-500">Login</a>
	{/if}
</div>