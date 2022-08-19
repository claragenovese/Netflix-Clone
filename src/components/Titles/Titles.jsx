import React from 'react'
import Category from './Categories/Category'

function Titles({render: allCategoriesArray}) {
    
    const titles = allCategoriesArray.map((item, index) => {
        return(
            <Category 
                key={index}
                categoryTitle={item.categoryTitle}
                categoryType={item.categoryType}
                allCategoryMovies={item.allCategoryMovies}
            />
        )
    })

    return (
        <div className='titles-container'>
            {titles}
        </div>
        
    )
}

export default Titles
