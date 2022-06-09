import { useState, useCallback } from 'react';

// TIPS memo化されたコンポーネントに関数を渡す場合はuseCallbackを使う

export type useCounterReturnType = {
  count: number;
  increment: () => void;
};

export default function useCounter(): useCounterReturnType {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => setCount((n) => n + 1), []);
  return { count, increment };
}
