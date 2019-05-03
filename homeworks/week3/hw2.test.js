const alphaSwap = require('./hw2');

describe('hw2', () => {
  it('should return correct answer when str = nick', () => {
    expect(alphaSwap('nick')).toBe('NICK');
  });
  it('should return correct answer when str = nick', () => {
    expect(alphaSwap('david')).toBe('DAVID');
  });
  it('should return correct answer when str = nick', () => {
    expect(alphaSwap('UpLoad')).toBe('uPlOAD');
  });
  it('should return correct answer when str = nick', () => {
    expect(alphaSwap('123YoYa')).toBe('123yOyA');
  });
});
