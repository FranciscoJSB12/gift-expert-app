import { Gif, GiphyAPIReponse } from "../interfaces";
import { giphyApiToEntity } from "./gifs.mapper";

export const getGifs = async (category: string): Promise<Gif[]> => {
    
    const url = `${import.meta.env.VITE_API_DOMAIN}/search?api_key=${import.meta.env.VITE_API_KEY}&q=${category}&limit=10`;
  
    const response = await fetch(url);
  
    const result = (await response.json()) as GiphyAPIReponse;
  
    const data = giphyApiToEntity(result);

    return data;
};