import type { Like } from './Like';
export type Post = {
	_id:string;
	title:string;
	content:string;
	userId:string;
	likes:Like[];
}