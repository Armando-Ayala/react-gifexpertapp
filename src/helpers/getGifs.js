


export const getGifs = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=7&api_key=0ozP1WiOm6Fmap9D81TpsyJUp7GFu65f`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map( img => {
        // console.log(img);
        //  console.log(img.title.split('GIF'));
        return{
            id: img.id,
            // title: img.title,
            title: img.title.split('GIF')[0],
            url: img.images?.downsized_medium.url
        }
    })
    return gifs;
}