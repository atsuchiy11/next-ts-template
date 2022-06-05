import { singletonCounter as singletonA } from '~/src/design-pattern/singleton/a';
import { singletonCounter as singletonB } from '~/src/design-pattern/singleton/b';
import { singletonCounter as Counter } from '~/src/design-pattern/singleton';

describe('Singleton pattern', () => {
  test('どちらのインスタンスからアクセスしても同じ', () => {
    singletonA.increment();
    singletonB.increment();
    expect(singletonA.getCount()).toBe(2);
  });

  // シングルトンは直前の変更に依存する

  test('1回インクリメントすると3になる', () => {
    Counter.increment();
    expect(Counter.getCount()).toBe(3);
  });

  test('3回インクリメントすると6になる', () => {
    Counter.increment();
    Counter.increment();
    Counter.increment();
    expect(Counter.getCount()).toBe(6);
  });

  test('1回デクリメントすると5になる', () => {
    Counter.decrement();
    expect(Counter.getCount()).toBe(5);
  });
});
