const BASE_URL = 'https://jsonplaceholder.typicode.com';

const request = (url) => {
  return fetch(`${BASE_URL}${url}`)
    .then(response => {
      if (!response.ok) {
        throw `${response.status} - ${response.statusText}`
      }

      return response.json()
    })
}

export const getUsers = () => {
  return request('/users');
}

export const getUser = (userId) => {
  return request(`/users/${userId}`);
}

export const getUserPosts = (userId) => {
  return request(`/users/${userId}/posts`);
}

export const getUserAlbums = (userId) => {
  return request(`/users/${userId}/albums`);
}
