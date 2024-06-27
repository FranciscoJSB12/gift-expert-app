import { test, describe, expect } from 'vitest';
import { getGifs } from '../../src/helpers/getGifs';

describe('Testing getGifs helper', () => {
    test('Should return a list of gifs', async () => {
        const gifs = await getGifs('One Punch');
        
        expect(gifs?.length).toBeGreaterThan(0);

        if (!gifs) return;

        expect(gifs[0]!).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        });
    });
});