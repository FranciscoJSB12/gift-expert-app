import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch', 'Dragon ball']);

  const onAddCategory = (value: string): void => {
    if (categories.includes(value)) return;

    setCategories([...categories, value]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onAddCategory={onAddCategory} />
      <ol>
        {categories.map(category => (
          <li key={category}>{category}</li>
        ))}
      </ol>
    </>
  );
};
