import api from './axios';

export const getPosts = ({ page = 1, limit = 10 }) =>
  api.get('/posts', {
    params: { page, limit },
});

export const writePost = ({ title, content, authorId }) =>
  api.post('/posts', {
    title,
    content,
    authorId, 
  });