
export const getGifts = async( category ) => {
    //Para cuando se tiene espacion se usa el encodeURI que remplaza los espacios por %20 para que funcione.
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=KbhneaqU12ARe1fuWXILfiHcEzLhenpu`;
    const respuesta = await fetch(url);
    const { data } = await respuesta.json();

    const gifs = data.map(img => {
        return ({
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url,
        });
    });

    return gifs;

    // console.log(gifs);
    // setimages(gifs);
};