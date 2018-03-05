import { getGithubUser, getGithubUserAsync } from './github-api';

describe('getGithubUser function test', () => {

  test('it should return a user witch a name', () => {
    expect.assertions(1);
    return getGithubUser('jcontrerasm').then( actual => {
      // toHaveProperty verifica el valor de la key
      expect(actual).toHaveProperty('name', 'Jc Contreras Meneses');
    });
  });

  test('it should return a promise', () => {
    const promise = getGithubUser('jcontrerasm');
    const actual = promise && promise.then && typeof promise.then === 'function';
    expect(actual).toBeTruthy();
  });

});

describe('getGithubUserAsync function test', () => {

  test('it should return a user witch a name', async () => {
    expect.assertions(1);
    const actual = await getGithubUserAsync('jcontrerasm');
    expect(actual).toHaveProperty('name', 'Jc Contreras Meneses');
  });

});