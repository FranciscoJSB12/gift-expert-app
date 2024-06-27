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
        <p>No se pudo cargar la información, prueba de nuevo...</p>
      )}

      {isLoading && <p>Cargando...</p>}

      {images.length === 0 && <p>No se encontró resultados</p>}

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
