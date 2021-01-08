import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball']);

    // const handleAdd = () => {
    //     const p1 = 'Shrek';
    //     //setCategories( category => [...category, p1]);
    //     setCategories( [p1, ...categories] );
    // }

    return (
        <>
            <h1>Gif Expert App</h1>
            <AddCategory setCategories={ setCategories }/>
            <hr/>
            <ol>
                { 
                    categories.map( category => ( 
                        <GifGrid 
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>
        </>
    )

}


// const apiKey = '0ozP1WiOm6Fmap9D81TpsyJUp7GFu65f';
// const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
// const { data } = await resp.json(); 
