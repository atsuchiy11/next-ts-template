/**
 * @fileoverview プロキシパターン
 * ターゲットオブジェクトとのやり取りをインターセプトし制御する。
 * バリデーション、書式設定、通知、デバッグなどで用いると良い。
 * TypeScriptがあれば不要と思われ。。
 */

type Person = {
  [key: string]: string | number;
  name: string;
  age: number;
  nationality: string;
};

const person: Person = {
  name: 'John Doe',
  age: 42,
  nationality: 'American',
};

export const personProxy = new Proxy(person, {
  get: (obj, prop) => {
    if (!obj[String(prop)])
      console.log(`Hmm.. this property doesn't seem to exist on the target object`);
    else console.log(`The value of ${String(prop)} is ${obj[String(prop)]}`);
  },

  set: (obj, prop, value) => {
    if (prop === 'age' && typeof value !== 'number') {
      console.log(`Sorry, you can only pass numeric values for age.`);
      return false;
    } else if (prop === 'name' && value.length < 2) {
      console.log(`You need to provide a valid name`);
      return false;
    } else {
      console.log(`Changed ${String(prop)} from ${obj[String(prop)]} to ${value}`);
      obj[String(prop)] = value;
      return true;
    }
  },
});

export const personProxyReflect = new Proxy(person, {
  get: (obj, prop) => {
    console.log(`The value of ${String(prop)} is ${Reflect.get(obj, prop)}`);
  },

  set: (obj, prop, value) => {
    console.log(`Changed ${String(prop)} from ${obj[String(prop)]} to ${value}`);
    Reflect.set(obj, prop, value);
    return true;
  },
});
