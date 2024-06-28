import { useFetchGifs } from '../hooks/useFetchGifs';
import { GridItem } from './GridItem';

interface Props {
  category: string;
}

export const GifGrid = ({ category }: Props) => {
  const { images, isLoading, error } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>

      {!isLoading && error && (
        <p>Error cargando la información, prueba de nuevo...</p>
      )}

      {isLoading && <p>Cargando...</p>}

      {!error && !isLoading && images.length === 0 && <p>Sin resultados</p>}

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
