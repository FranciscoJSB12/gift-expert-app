import { ChangeEvent, FormEvent, useState } from 'react';

interface Props {
  onAddCategory: (value: string) => void;
}

export const AddCategory = ({ onAddCategory }: Props) => {
  const [inputValue, setInputValue] = useState('');

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };

  const onSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmedValue = inputValue.trim();

    if (trimmedValue.length <= 1) return;

    onAddCategory(trimmedValue);

    setInputValue('');
  };

  return (
    <form
      onSubmit={onSubmitForm}
      aria-label='form'
    >
      <input
        type='text'
        placeholder='Buscar gifs'
        value={inputValue}
        onChange={onChangeInput}
      />
    </form>
  );
};
