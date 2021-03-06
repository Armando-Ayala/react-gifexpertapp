import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
    
    const [inputValue, setInpuValue] = useState('');

    const handleInputChange = e => {
        setInpuValue(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            setCategories( categories => [inputValue, ...categories] );
            setInpuValue('');
        }

    }

    return (
        <form onSubmit = {handleSubmit}>
            {/* <h1>{inpuValue}</h1> */}
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}