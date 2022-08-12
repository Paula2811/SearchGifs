import React from 'react'

const GifItem = ({title,url}) => {

    return (
    <div className='card'>
        <img src={url} alt={title} className='gif' />
        { title.length > 0 && (<p className='card-title'>{title}</p>)}
        
    </div>
    )
}

export default GifItem



