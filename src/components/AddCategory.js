import React, { useState } from 'react';
import PropTypes from 'prop-types';


export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value); // Con esta función cambiamos el input
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Con esto evitamos el comportamiento por defecto, en este caso evitamos que refresque la página

        if ( inputValue.trim().length > 2 ){
            setCategories( cats => [inputValue.charAt(0).toLocaleUpperCase() + inputValue.slice(1), ...cats] );
            setInputValue('');
        };

    };

    return ( // El onSubmit es el evento que lanzamos al presionar enter
        <form onSubmit={ handleSubmit }>
            <input
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    );

};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
};