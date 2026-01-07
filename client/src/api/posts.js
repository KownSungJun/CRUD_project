import client from './client';

export const getPosts = ({ page = 1, limit = 10 }) =>
  client.get('/posts', {
    params: { page, limit },
});

export const writePost = ({ title, content}) =>
  client.post('/posts', {
    title,
    content,
  });