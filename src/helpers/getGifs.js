//obtenemos el url
export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=sGYpi8I6Rd38L28gpLbU95GWHz98qGTU&q=${category}&limit=10`;
    
    //peticion http
    const resp = await fetch( url );
    const {data} = await resp.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url

    }));

    return gifs;
}