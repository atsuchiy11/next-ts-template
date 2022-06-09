import { render, screen } from '@testing-library/react';
import WordCount from '.';

describe('WordCount', () => {
  describe('Component', () => {
    test('rendered', () => {
      render(<WordCount text="hello world" />);
      expect(screen.getByText('Open the console')).toBeInTheDocument();
    });
  });
  describe('Hook', () => {});
});
