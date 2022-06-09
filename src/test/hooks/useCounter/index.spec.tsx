import { renderHook, RenderResult, act } from '@testing-library/react-hooks';
import useCounter, { useCounterReturnType } from '.';

describe('custom hook /useCounter', () => {
  let result: RenderResult<useCounterReturnType>;
  beforeEach(() => {
    result = renderHook(() => useCounter()).result;
  });

  test('初期状態', () => {
    expect(result.current.count).toBe(0);
    expect(typeof result.current.increment).toBe('function');
  });

  test('incrementしたら+1される', () => {
    act(() => result.current.increment());
    expect(result.current.count).toBe(1);
  });
});
