import { useEffect, useState } from "react";
import {getGifs} from "../helpers/getGifs"



const useFetchGifs = (category) => {
    
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true)

    const getImages = async (category) => {
        const newImages = await getGifs(category)
        setTimeout(() =>{
            setImages(newImages)
            setLoading(false)
        },1000)
    }
    

    useEffect(() =>{
        getImages(category)
    },[])

    return{
        images,
        loading
    }
}

export default useFetchGifs

