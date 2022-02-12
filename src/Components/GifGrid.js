import React, { } from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifts } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    // const [count, setcount] = useState(0);

    // const [images, setimages] = useState([]);

    //const state = useFetchGifs(); Lo desestructuro como esta abajo.
    const {data, loading} = useFetchGifs( category );
    console.log('DATA: ', data, '\nLOADING', loading);

    // useEffect( ()=> 
    // {
    //     getGifts( category )
    //         .then( imgs => setimages(imgs) )
    // }, [ category ]);

    // const getGifts = async() => {
    //     //Para cuando se tiene espacion se usa el encodeURI que remplaza los espacios por %20 para que funcione.
    //     const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=KbhneaqU12ARe1fuWXILfiHcEzLhenpu`;
    //     const respuesta = await fetch(url);
    //     const { data } = await respuesta.json();

    //     const gifs = data.map(img => {
    //         return ({
    //             id: img.id,
    //             title: img.title,
    //             url: img.images?.downsized_medium.url,
    //         });
    //     });

    //     console.log(gifs);
    //     setimages(gifs);
    // };

    // getGifts(); //Lo comento pero como siepmre que ejecuto un boton refresca la pagina lo rempalzo y llamo por el UseEfects de arriba.

    return (
        <Fragment>
            <h5 className='animate__animated animate__flash'>
                { loading && 'Cargando...' }
            </h5>

            {           
                (loading === false) &&
                    <h3 className='animate__animated animate__backInDown'>
                        { category }
                    </h3>
            }

            <div className='card-grid' >
                {
                    data.map( img => {
                        return (                    
                        <GifGridItem
                            key={ img.id }
                            {...img}
                        />);
                    })
                }
            </div>
        </Fragment>
    )
}
