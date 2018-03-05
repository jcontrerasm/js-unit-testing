import { sum } from './sum';

test('it should sum 1 + 2 to equal 30', () => {
  const actual = sum(1, 2);
  const expected = 3;
  expect(actual).toEqual(expected);
});