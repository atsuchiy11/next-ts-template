import { render, screen } from '@testing-library/react';
import { renderHook, RenderResult } from '@testing-library/react-hooks';
import userEvent from '@testing-library/user-event';
import HeavyButton from '.';
import useCounter, { useCounterReturnType } from '~/src/test/hooks/useCounter';

describe('HeavyButton', () => {
  let result: RenderResult<useCounterReturnType>;
  beforeEach(() => {
    result = renderHook(() => useCounter()).result;
  });

  test('rendered', () => {
    render(<HeavyButton onClick={result.current.increment} />);
    // 初期状態
    expect(result.current.count).toBe(0);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('clicked', () => {
    render(<HeavyButton onClick={result.current.increment} />);
    // イベント発火
    userEvent.click(screen.getByRole('button'));
    // incrementされたか
    expect(result.current.count).toBe(1);
  });
});
