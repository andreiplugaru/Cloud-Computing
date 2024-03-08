const UserService = require('./users/user_service');
const UserRepository = require('./users/user_repository');
const PostRepository = require('./posts/post_repository');
const PostService = require('./posts/post_service');
const LikeRepository = require('./likes/like_repository');
const LikeService = require('./likes/like_service');
const Database = require('./database');
let userRepository = new UserRepository();
let userService = new UserService(userRepository);

let postRepository = new PostRepository();
let postService = new PostService(postRepository, userService);

let likeRepository = new LikeRepository();
let likeService = new LikeService(likeRepository, userService, postService);
module.exports = { userService, postService, likeService };
