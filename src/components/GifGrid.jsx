import React from 'react'
import useFetchGifs from '../hooks/useFetchGifs';
import GifItem from './GifItem';

const GifGrid = ({category, onClose}) => {

    const {images, loading} = useFetchGifs(category)
    let i = 0

    return (
        <div>
            <div className="title">
            <h3 key={category}>{category}</h3>
            <button onClick={()=>onClose(category)} className="button1" key={i++}>X</button>
            </div>
                {
                    loading && (
                        <div className="loading">
                            <div className="wrapper">
                                <div className="circle"></div>
                                <div className="circle"></div>
                                <div className="circle"></div>
                                <div className="shadow"></div>
                                <div className="shadow"></div>
                                <div className="shadow"></div>
                            </div>
                        </div>
                    ) 
                }
            <div className="card-grid">
                {
                    images.map((img) => (
                        <GifItem key={img.id} 
                        {...img}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default GifGrid
