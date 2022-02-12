import React, { Fragment as form, useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => 
{
    const [inputValue, setinputValue] = useState('');

    const inputWord = (e) => {
        const {value} = e.target; //Desestructuro el objeto para obtener el valor que me interesa.
        //console.log(value);
        setinputValue(value);
    };

    const inputSubmit = (e) =>{
        e.preventDefault(); //No permite que se refresque la pagina por defecto.

        (inputValue.trim().length > 2)
            ? setCategories( nuevaCat => [inputValue, ...nuevaCat])
            : window.alert("El campo no puede estar vacio");
        //setCategories( nuevaCat => [...nuevaCat, inputValue]);
    }

    /**Se hace uso del Fragment cuando requiero de un elemento que me agrupe otros. COmo el en caso del form no es necesario ya que el mismo
       se encarga de agruparme dichos elementos.**/
    return (

        <form onSubmit={inputSubmit}>
            <input 
                type="text" 
                value={inputValue} 
                onChange={inputWord} 
            />
        </form>

        // <Fragment> Se remplaza por el form que agrupa de igual manera los elementos como el Fragment.
        //     <input 
        //         type="text" 
        //         value={inputValue} 
        //         onChange={inputWord} 
        //     />
        // </Fragment>
    );
}

AddCategory.prototype = {
    setCategories: PropTypes.func.isRequired,
};