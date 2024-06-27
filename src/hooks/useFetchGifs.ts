import { useEffect, useState } from "react";
import { Gif } from "../interfaces";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category: string) => {
    const [images, setImages] = useState<Gif[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    const loadImages = async (): Promise<void> => {
      error && setError(false);
      
      const newImages = await getGifs(category);

      if (!newImages) {
        setError(true);
        setIsLoading(false);
        return;
      }

      setImages(newImages);
      setIsLoading(false);
    };
  
    useEffect(() => {
      loadImages();
    }, []);

    return {
        images,
        isLoading,
        error
    };
}