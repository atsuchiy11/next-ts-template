import { personProxy, personProxyReflect } from '.';

describe('Proxy pattern', () => {
  // console.logをモックする
  beforeEach(() => {
    jest.spyOn(console, 'log');
  });

  describe('personProxcy', () => {
    test('プロパティを参照するとget()が呼ばれコンソール表示', () => {
      personProxy.name;
      expect(console.log).toHaveBeenCalledWith('The value of name is John Doe');
    });

    test('プロパティに代入するとset()が呼ばれコンソール表示', () => {
      personProxy.age = 43;
      expect(console.log).toHaveBeenCalledWith('Changed age from 42 to 43');
    });

    test('存在しないプロパティを参照する', () => {
      const notExistProperty = personProxy.company;
      expect(console.log).toHaveBeenCalledWith(
        "Hmm.. this property doesn't seem to exist on the target object"
      );
      expect(notExistProperty).toBe(undefined);
    });

    test('不正なデータ型のプロパティ値を代入する', () => {
      // TSの構文解析に引っかかるのでOK
    });
  });

  describe('personProxyReflect', () => {
    test('プロパティを参照するとget()が呼ばれコンソール表示', () => {
      personProxyReflect.name;
      expect(console.log).toHaveBeenCalledWith('The value of name is John Doe');
    });

    test('プロパティに代入するとset()が呼ばれコンソール表示', () => {
      // 直前に依存している
      personProxyReflect.age = 44;
      expect(console.log).toHaveBeenCalledWith('Changed age from 43 to 44');
    });
  });
});
