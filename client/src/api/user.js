import client from './client';

export const getUser = (userId) => client.get(`/users/${userId}`);

export const patchUser = (userId) => client.patch(`/users/${userId}`);

export const deleteUser = (userId) => client.delete(`/users/${userId}`);
