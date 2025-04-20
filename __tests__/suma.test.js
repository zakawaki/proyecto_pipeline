const suma = require('../src/utils/suma');

describe('suma()', () => {
  test('2 + 3 debe ser 5', () => {
    expect(suma(2, 3)).toBe(5);
  });
});