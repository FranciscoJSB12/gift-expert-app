import { test, describe, expect } from 'vitest';
import { getGifs } from '../../src/helpers/getGifs';
import { Gif } from '../../src/interfaces';

describe('Testing getGifs helper', () => {
    test('Should return a list of gifs', async () => {
        const gifs = await getGifs('One Punch') as Gif[];

        expect(gifs.length).toBeGreaterThan(0);

        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        });
    });
});