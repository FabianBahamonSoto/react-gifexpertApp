import React, { Fragment, useState } from 'react';
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';

const GiftExpertApp = () => 
{
    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball Z'];
    const [categories, setCategories] = useState(['Dragon Ball Z']);

    // const nuevaCategoria = () =>{ //LO MANTENGO COMO REFERENCIA.
    //     //setCategories([...categories, 'Naruto']); //Forma de agregar un nuevo elemento en la ultioma posicion.
    //     //setCategories(['Naruto', ...categories]); //Forma de agregar un nuevo elemento en la primera posicion.
    //     setCategories(nuevaCat => [...nuevaCat, 'Naruto Shipuden']); //Forma de agregar un nuevo elemento en la primera posicion.
    // };

    <GiftExpertApp />
    return (
        <Fragment>
            <h1> GiftExpertApp </h1>
            <AddCategory setCategories = {setCategories}/>
            <hr />

            <ol>
                {              
                    categories.map(category => {
                        return (<GifGrid
                                    key = {category}
                                    category = {category} 
                                />);
                    })
                
                    // categories.map((category, id) => 
                    // {
                    //     return ( <GifGrid
                    //                 key={category}
                    //                 category = {category}
                    //             />)
                    // )
                }
            </ol>

            {/* <button onClick={nuevaCategoria}>Agregar Serie</button> */}
            
        </Fragment>
    );
};

export{
    GiftExpertApp,
}