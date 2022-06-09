import { renderHook, RenderResult } from '@testing-library/react-hooks';
import useFetch from '.';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { cleanup } from '@testing-library/react';

// TIPS 外部APIを叩かなければMSWは不要かもしれない

const url = 'https://dog.ceo/api/breed/labrador/images/random/6';
const mockResponse = {
  message: [
    'https://images.dog.ceo/breeds/labrador/0001.jpg',
    'https://images.dog.ceo/breeds/labrador/0002.jpg',
    'https://images.dog.ceo/breeds/labrador/0003.jpg',
    'https://images.dog.ceo/breeds/labrador/0004.jpg',
    'https://images.dog.ceo/breeds/labrador/0005.jpg',
    'https://images.dog.ceo/breeds/labrador/0006.jpg',
  ],
  status: 'success',
};

const handlers = [
  rest.get(url, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockResponse));
  }),
];

const mockServer = setupServer(...handlers);

describe('custom hook /useFetch', () => {
  beforeAll(() => mockServer.listen());
  afterEach(() => {
    mockServer.resetHandlers();
    cleanup();
  });

  test('initial', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetch(url));
    expect(result.current.data).toEqual({});
    // 更新を待機
    await waitForNextUpdate();
    expect(result.current.data).toEqual(mockResponse);
  });
});
