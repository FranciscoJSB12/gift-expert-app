import { Gif, GiphyAPIReponse } from "../interfaces";

export const giphyApiToEntity = (result: GiphyAPIReponse): Gif[] => {
    const gifs = result.data.map(gif => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.downsized_medium.url,
    }));

    return gifs;
}