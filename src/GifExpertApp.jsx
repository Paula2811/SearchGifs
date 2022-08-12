import React, { useState } from 'react'
import GifGrid from './components/GifGrid'
import Navbar from './components/Navbar'

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Sailor Moon'])

    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory))return;
        //if(categories.find( el => el = newCategory))return;
        setCategories([newCategory,...categories])
        
    }

    const onClose = (category) => {
        setCategories(oldCategories => oldCategories.filter(c => c !== category))
    }

    return (
        <>
            <Navbar onAddCategory={onAddCategory}/>
            {categories.map(category => (
                <>
                    <GifGrid key={category} category={category} onClose={onClose}/>
                </>
            ))}


        </>
    )
}

export default GifExpertApp
