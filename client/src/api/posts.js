import api from './axios';

export const getPosts = ({ page = 1, limit = 10 }) =>
  api.get('/posts', {
    params: { page, limit },
});