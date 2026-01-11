import client from './client';

export const getAllPosts = ({ page = 1, limit = 10 }) =>
  client.get('/posts', {
    params: { page, limit },
  });

export const writePost = ({ title, content }) =>
  client.post('/posts', {
    title,
    content,
  });

export const getPost = (postId) => client.get(`/posts/${postId}`);

export const patchPost = (postId) => client.patch(`/posts/${postId}`);

export const deletePost = (postId) => client.delete(`/posts/${postId}`);
