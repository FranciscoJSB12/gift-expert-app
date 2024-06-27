import { useEffect, useState } from "react";
import { Gif } from "../interfaces";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category: string) => {
    const [images, setImages] = useState<Gif[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const loadImages = async (): Promise<void> => {
      const newImages = await getGifs(category);
      setImages(newImages);
      setIsLoading(false);
    };
  
    useEffect(() => {
      loadImages();
    }, []);

    return {
        images,
        isLoading
    };
}