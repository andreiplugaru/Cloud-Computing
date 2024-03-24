<script lang="ts">
	import { getPostsByUser } from '../stores/post';
	import type { User } from '../models/User';
	import { SERVER_URL } from '../consts';

	let users: User[] = [];
	export const loadUsers = async () => {
		const res = await fetch(SERVER_URL+'/api/v1/users');
		const response = await res.json();
		if(res.ok){
			users = response;
		}else{
			console.log(response);
		}
	};
	function getUsersPost(userId: string) {
		getPostsByUser(userId);
	}
	loadUsers();
</script>
<div class="relative flex flex-col text-gray-700 bg-white shadow-2xl w-min rounded-xl bg-clip-border h-min">
	<p class="text-center font text-base">Users</p>
	<nav class="flex min-w-[200px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
		{#each users as user}
		<div role="button"
				 class="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-300  hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900" on:click={() => getUsersPost(user._id)} >
			<div class="grid mr-4 place-items-center">
				<img alt="candice" src="data:image/octet-stream;base64, {user.avatar}"
						 class="relative inline-block h-12 w-12 !rounded-full  object-cover object-center" />
			</div>
			<div>
				<h6
					class="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
					{user.name}
				</h6>
			</div>
		</div>
		{/each}
	</nav>
</div>
