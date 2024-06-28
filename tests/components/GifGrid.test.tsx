import { test, expect, describe, afterEach, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

vi.mock('../../src/hooks/useFetchGifs.ts');

describe('Testing <GifGrid />', () => {
  const category = 'One Punch';

  afterEach(cleanup);

  test('Should initially display loading state', () => {
    vi.mocked(useFetchGifs).mockReturnValue({
      images: [],
      isLoading: true,
      error: false,
    });

    render(<GifGrid category={category} />);

    expect(screen.getByText('Cargando...')).toBeTruthy();
    expect(screen.getByText(category)).toBeTruthy();
  });

  test('Should display the items when the images are loaded - useFetchGifs', () => {
    const gifs = [
      {
        id: 'ABC',
        title: 'Pokemon',
        url: 'https://localhost/pokemon.png',
      },
      {
        id: 'ABC2',
        title: 'Pokemon2',
        url: 'https://localhost/pokemon2.png',
      },
    ];

    vi.mocked(useFetchGifs).mockReturnValue({
      images: gifs,
      isLoading: false,
      error: false,
    });

    render(<GifGrid category={category} />);

    expect(screen.getAllByRole('img').length).toBe(2);
  });
});
