import { test, expect, describe } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('Testing useFetchGifs', () => {
    test('Should return the initial state', () => {
        const { result } = renderHook(() => useFetchGifs('One Punch'));
        const { images, isLoading} = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });

    test('Should return the images', async () => {
        const { result } = renderHook(() => useFetchGifs('One Punch'));
        
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0),
            { 
                timeout: 3000,
            }
        );

        const { images, isLoading, error } = result.current;

        console.log({images, isLoading, error });

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
        expect(error).toBeFalsy();
    });

    // test('Should return an error', async () => {
    //     const { result } = renderHook(() => useFetchGifs('One Punch'));
        
    //     await waitFor(
    //         () => expect(result.current.isLoading).toBeFalsy(),
    //     );

    //     const { images, isLoading, error } = result.current;

    //     expect(images.length).toBe(0);
    //     expect(isLoading).toBeFalsy();
    //     expect(error).toBeTruthy();
    // });
});