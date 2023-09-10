export const apiUrls = {
  getUsers: '/user',
  getUsersById: (id: string | number) => `/user/${id}`,
  patchUsersById: (id: string | number) => `/user/${id}`,
  deleteUsersById: (id: string | number) => `/user/${id}`,
  postUser: '/user',

  // AUTH
  signIn: '/auth/login',
};
