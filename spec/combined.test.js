var api = require('../main'),
  testData = require('../test-data');

describe('The numberOfChars function ', () => {
  describe('counts the chars ', () => {
    test('in poem', () => {
      var result = api.numberOfChars(testData.poem);

      expect(result).toEqual(20);
    });
  });

  describe('counts the chars in a set', () => {
    test('in poem', () => {
      var result = api.numberOfChars(new Set(testData.poem));

      expect(result).toEqual(20);
    });
  });
});


describe('The numberOfCertainChars function ', () => {
  describe('counts the number of As ', () => {
    test('in poem', () => {
      var result = api.numberOfCertainChars(testData.poem, 'a');

      expect(result).toEqual(6);
    });
  });

  describe('counts the number of As ', () => {
    test('in poem set', () => {
      var result = api.numberOfCertainChars(new Set(testData.poem), 'a');

      expect(result).toEqual(6);
    });
  });
});