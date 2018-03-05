import fetch from 'node-fetch';

export const getGithubUser = (handle) => {
  const url=`https://api.github.com/users/${handle}`;
  return fetch(url).then( response => response.json() );
};

export const getGithubUserAsync = async (handle) => {
  const url=`https://api.github.com/users/${handle}`;
  const response = await fetch(url);
  return response.json();
};