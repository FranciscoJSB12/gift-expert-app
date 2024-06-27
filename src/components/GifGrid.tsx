import { useFetchGifs } from '../hooks/useFetchGifs';
import { GridItem } from './GridItem';

interface Props {
  category: string;
}

export const GifGrid = ({ category }: Props) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>

      {isLoading && <p>Cargando...</p>}

      <div className='card-grid'>
        {images.map(image => (
          <GridItem
            key={image.id}
            {...image}
          />
        ))}
      </div>
    </>
  );
};
