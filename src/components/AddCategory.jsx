import React, { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (evento) => {

        setInputValue(event.target.value);
    };

    const onSubmit = (e)=> {
        //para evitar que cuando hacemos enter se refresque el input
        e.preventDefault();
        if(inputValue.trim().length <=1) return;

        onNewCategory(inputValue.trim());

        //de esta forma limpiamos el input cada vez que le damos enter
        setInputValue('');
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder='Buscar Gif'
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}


