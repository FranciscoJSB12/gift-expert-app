import { test, expect, describe, beforeEach, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components';

describe('Testing <AddCategory />', () => {
  beforeEach(cleanup);

  test('Should change input value', () => {
    render(<AddCategory onAddCategory={() => {}} />);

    const input = screen.getByRole<HTMLInputElement>('textbox');

    fireEvent.input(input, { target: { value: 'Pokemon' } });

    expect(input.value).toBe('Pokemon');
  });

  test('Should call onAddCategory', () => {
    const inputValue = 'Pokemon';
    const onAddCategory = vi.fn();

    render(<AddCategory onAddCategory={onAddCategory} />);

    const input = screen.getByRole<HTMLInputElement>('textbox');
    const form = screen.getByRole<HTMLFormElement>('form');

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(input.value).toBe('');

    // expect(onAddCategory).toHaveBeenCalled();
    // expect(onAddCategory).toHaveBeenCalledTimes(1);
    expect(onAddCategory).toHaveBeenCalledWith(inputValue);
  });

  test('Should not call onAddCategory if input is empty', () => {
    const onAddCategory = vi.fn();
    render(<AddCategory onAddCategory={onAddCategory} />);

    const form = screen.getByRole<HTMLFormElement>('form');
    fireEvent.submit(form);

    expect(onAddCategory).toHaveBeenCalledTimes(0);
  });
});
