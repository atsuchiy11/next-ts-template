import { square } from '~/src/components/atoms/foo';
describe('function unit tests', () => {
  test('square()', () => {
    // 引数を2乗して返すことを期待する
    expect(square(4)).toBe(16);
  });
});
