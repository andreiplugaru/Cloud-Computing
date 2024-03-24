import { SERVER_URL } from '../consts';
import { get, type Writable, writable } from 'svelte/store';
import type { Post } from '../models/Post';
import { user } from './user';
import type { Like } from '../models/Like';

export const currentPosts:Writable<Post[]> =  writable([]);

export const getPostsByUser = async (userId:string) => {
	const result =  await fetch(SERVER_URL + `/api/v1/posts/${userId}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	});
	const response =  await result.json();
	if(result.ok){
		currentPosts.set(response);
	}else{
		console.log(response);
	}

	return result;
}

export const createPost = async (post:Post) => {
	const result =  await fetch(SERVER_URL + `/api/v1/posts`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(post)
	});
	const response =  await result.json();
	if(!result.ok){
		console.log(response);
	}
	return result;
}

export const deletePost = async (postId:string) => {
	const result =  await fetch(SERVER_URL + `/api/v1/posts/${postId}`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json'
		}
	});
	if(result.ok){
		currentPosts.update(posts => posts.filter(p => p._id !== postId));
	}
	else{
		console.log(result);
	}
	return result;
}

export const likePost = async (postId:string) => {
	const result =  await fetch(SERVER_URL + `/api/v1/likes`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({postId, userId:get(user)._id})
	});

	if(result.ok){
		await result.json()
		currentPosts.update(posts => posts.map(post => {
			if(post._id === postId){
				post.likes.push({userId:get(user)._id} as Like);
			}
			return post;
		}));
}
	else{
		console.log(result);
	}
	return result;
}

export const dislikePost = async (postId:string) => {
	const result =  await fetch(SERVER_URL + `/api/v1/likes`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({postId, userId:get(user)._id})
	});

	if(result.ok){
		currentPosts.update(posts => posts.map(post => {
			if(post._id === postId){
				post.likes = post.likes.filter(like => like.userId !== get(user)._id);
			}
			return post;
		}));
	}
	else{
		console.log(result);
	}
	return result;
}

export const hasCurrentUserLikedPost = (postId:string) => {
	const posts = get(currentPosts);
	const currentUser = get(user);
	if(currentUser){
		const post = posts.find(p => p._id === postId);
		if(post){
			return post.likes.map(post => post.userId).includes(currentUser._id);
		}
	}
	return false;
}

export const getAiScoreForPost = async (postId:string):Promise<number> => {
	const result =  await fetch(SERVER_URL + `/api/v1/posts/aiScore/${postId}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	});
	if(result.ok){
		return await result.json();
	}
	return 0;

}
