import { clear, firtElement, deleteIf } from './arrayClear';

describe('Clear function test', () => {

    test('it should clear an empty array', () => {
      const actual = [];
      const expected = clear(actual);
      expect(actual).toEqual(expected);
    });
    
    test('it should clear an non-empty array', () => {
      const actual = clear([1,2,3]);
      const expected = [];
      expect(actual).toEqual(expected);
    });
    
    test('it should throw when the argument is not an array', () => {
      expect( () => {
        clear();
      }).toThrow('argument is not a array');
    });

});

describe('First function test', () => {

  test('it should firts element in array', () => {
    const expected = 1;
    const arrayTest = [expected, 2, 3, 4];
    const actual = firtElement(arrayTest);
    expect(actual).toEqual(expected);
  });

  test('it should return null if the array has no elements', () => {
    const arrayTest = [];
    const actual = firtElement(arrayTest);
    const expected = null;
    expect(actual).toEqual(expected);
  });
  
  test('it should throw when the argument is not an array', () => {
    expect( () => {
      firtElement();
    }).toThrow('argument is not a array');
  });
  
});

describe('DeleteIf function test', () => {

  test('it should delete all elements that match the condition', () => {
    const arrayTest = [1,3,4,7,9];
    const greaterThan5 = (number) => number > 5;
    const expected = [1,3,4];
    const actual = deleteIf(arrayTest, greaterThan5);
    expect(actual).toEqual(expected);
  });

  test('it should return an empty array if the array is empty', () => {
    const expected = [];
    const arrayTest = [];
    const greaterThan5 = (number) => number > 5;
    const actual = deleteIf(arrayTest, greaterThan5);
    expect(actual).toEqual(expected);
  });

  test('it should not delete any elements if none match the condition', () => {
    const arrayTest = [0,1,2,3,4];
    const greaterThan5 = (number) => number > 5;
    const expected = [0,1,2,3,4];
    const actual = deleteIf(arrayTest, greaterThan5);
    expect(actual).toEqual(expected);
  });

  test('it should throw when the argument is not an array', () => {
    const greaterThan5 = (number) => number > 5;
    expect( () => {
      deleteIf(undefined, greaterThan5);
    }).toThrow('argument is not a array');
  });

});
