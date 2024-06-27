import { test, describe, expect, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { GridItem } from '../../src/components';

describe('Testing <GridItem />', () => {
  const title = 'One Punch Man GIF';
  const url =
    'https://media2.giphy.com/media/VXJWhaO7afRe/giphy.gif?cid=9f017724sa8fjxmpligfbyoguybcvci91u0m7p7x2i7gfa7k&ep=v1_gifs_search&rid=giphy.gif&ct=g';

  afterEach(cleanup);

  test('Should match the snapshot', () => {
    const { container } = render(
      <GridItem
        title={title}
        url={url}
      />
    );
    expect(container).toMatchSnapshot();
  });

  test('Should render the image with its URL and ALT', () => {
    render(
      <GridItem
        title={title}
        url={url}
      />
    );

    // expect(screen.getByRole<HTMLImageElement>('img').src).toBe(url);
    // expect(screen.getByRole<HTMLImageElement>('img').alt).toBe(title);

    const { alt, src } = screen.getByRole<HTMLImageElement>('img');

    expect(src).toBe(url);
    expect(alt).toBe(alt);
  });

  test('Should display the title', () => {
    render(
      <GridItem
        title={title}
        url={url}
      />
    );

    expect(screen.getByText(title)).toBeTruthy();
  });
});
