import React, { useState } from 'react'
import {RiCloseFill} from 'react-icons/ri'
import { useListContext } from '../../Context/Context'

const BASE_IMG_URL = "https://image.tmdb.org/t/p/original"

export default function EachMovieList({image, title, index}) {
    const [isHover, setIsHover] = useState(false)

    const { removeSavedMovie } = useListContext()

    return (
        <div 
            className='ml-img-container'
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            <img 
                key={index}
                className='ml-img' 
                src={`${BASE_IMG_URL}${image}`}
            />
            {isHover && (
                <>
                    <div className='layer-bkg'></div>
                    <RiCloseFill 
                        className='hover-cross' 
                        onClick={() => removeSavedMovie(title)}
                    />
                </>
            )}
        </div>
    )
}
