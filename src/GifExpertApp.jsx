import React, { useState } from 'react';
import { AddCategory, GifGrid } from './components';



export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {
        //validacion (que no se repitan los nombres)
        if (categories.includes(newCategory)) {
            return;
        }

        // console.log(newCategory);
        setCategories([newCategory, ...categories]);



    };

    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory
                onNewCategory={value => onAddCategory(value)}
            />

            {/* listado de gifs */}

            {categories.map(category => (
                <GifGrid
                    key={category}
                    category={category}
                />
            ))
            }

            {/* gifsItems */}

        </>
    )
}


