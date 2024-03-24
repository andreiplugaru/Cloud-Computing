import { browser } from '$app/environment';

import {writable} from 'svelte/store';
import { SERVER_URL } from '../consts';
const localData = localStorage.getItem("user")
export const user =  writable(localData ? JSON.parse(localData) : null);

export const authenticate = async (userEmail:string) => {
	const response = await fetch(SERVER_URL + "/api/v1/users/login", {
		method: 'POST',
		body: JSON.stringify({email:userEmail}),
		headers: {
			'Content-Type': 'application/json'
		}
	});
	if(response.ok){
		const data = await response.json();
		user.set(data);

	}
	return response;
}

export const createAccount = async (userEmail:string, name:string) => {
	const response = await fetch(SERVER_URL + "/api/v1/users", {
		method: 'POST',
		body: JSON.stringify({email:userEmail, name:name}),
		headers: {
			'Content-Type': 'application/json'
		}
	});
	if(response.ok){
		const data = await response.json();
		user.set(data);
	}
	return response;
}
user.subscribe((value) => {
	if (browser) {
		window.localStorage.setItem('user', JSON.stringify(value));
	}
});