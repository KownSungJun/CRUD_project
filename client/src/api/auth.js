import api from './client'

export const register = ({ userId, userName, password }) => {
  return api.post("/auth/register", {
    userId,
    userName,
    password,
  }, { withCredentials: true });
};