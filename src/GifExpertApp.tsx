import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState<string[]>(['One Punch']);

  const onAddCategory = (value: string): void => {
    if (categories.includes(value)) return;

    setCategories([...categories, value]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onAddCategory={onAddCategory} />
      {categories.map(category => (
        <GifGrid
          key={category}
          category={category}
        />
      ))}
    </>
  );
};
