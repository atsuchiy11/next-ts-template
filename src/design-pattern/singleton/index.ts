/**
 * @fileoverview シングルトンパターン
 * 一度だけインスタンスでき、グローバルにアクセスできるようなクラス。
 * アプリケーションのグローバルな状態を管理するのに適している。
 * JavaScriptではオブジェクトを直接作成できるのでアンチパターン（らしい）。
 * Reactではシングルトンではなく、ReduxやContextなどで状態管理を行うのがベター
 */

let instance: Counter;
let counter = 0;

export default class Counter {
  constructor() {
    if (instance) {
      throw new Error('You can only create one instance.');
    }
    instance = this;
  }

  getInstance() {
    return this;
  }

  getCount() {
    return counter;
  }

  increment() {
    return ++counter;
  }

  decrement() {
    return --counter;
  }
}

export const singletonCounter = Object.freeze(new Counter());

let count = 0;
const simpleCounter = {
  increment() {
    return ++count;
  },
  decrement() {
    return --count;
  },
};
Object.freeze(simpleCounter);
export { simpleCounter };
