import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AppBucketRelay, AppWithContext, AppTheme } from './index';

describe('App /bucket-relay', () => {
  test('rendered', () => {
    render(<AppBucketRelay />);
    expect(screen.getByText('Oops, Props bucket relay')).toBeInTheDocument();
  });
});

describe('App /context', () => {
  test('rendered', () => {
    render(<AppWithContext />);
    expect(screen.getByText('Context is beautiful!')).toBeInTheDocument();
  });
});

describe('App /theme', () => {
  test('rendered /toggleが1つとlistitemが10個表示される', () => {
    render(<AppTheme />);
    expect(screen.getAllByRole('checkbox')).toHaveLength(1);
    expect(screen.getAllByRole('listitem')).toHaveLength(10);
  });

  test('switch toggle /toggleを切り替えると.Appのthemeが切り替わる', async () => {
    render(<AppTheme />);
    // 初期テーマはdark
    expect(screen.getByTestId('app')).toHaveClass('App theme-dark');

    // イベント発火
    userEvent.click(screen.getByRole('checkbox'));

    // テーマがlightになることをアサーション
    expect(await screen.findByTestId('app')).toHaveClass('App theme-light');
  });
});
