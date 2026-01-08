import api from './client';

export const register = ({ userId, userName, password }) => {
  console.log(
    'userId : ',
    typeof userId,
    '| password : ',
    typeof password,
    ' | userName : ',
    typeof userName,
  );
  return api.post(
    '/users/register',
    {
      userId,
      userName,
      password,
    },
    {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
};

export const Login = ({ userId, password }) => {
  return api.post(
    '/auth/login',
    {
      userId,
      password,
    },
    { withCredentials: true },
  );
};

export const Logout = () => {
  return api.post('/auth/logout', {}, { withCredentials: true });
};
