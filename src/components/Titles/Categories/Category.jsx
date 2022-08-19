import React from 'react'
import tenNumbersArr from '../../../assets/numbers'
import { Swiper, SwiperSlide } from "swiper/react";
import EachMovie from './eachMovie/EachMovie';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function Category({categoryTitle, categoryType, allCategoryMovies}) {

  const eachMovie = allCategoryMovies.map((item, index) => {
    if(item.backdrop_path === null) return null

    if(categoryType === "Popular" && index < 10 ){
      let position = tenNumbersArr[index].link
      return (
        <SwiperSlide key={index}>
            <EachMovie
              item={item}
              position={position}
            />
        </SwiperSlide>
      )
    }

    else if(categoryType === "Popular" && index >= 10) return null

    return (
      <SwiperSlide key={index}>
        <EachMovie
            item={item}
        />
      </SwiperSlide>
    )
  })

    return (
        <div className='category-container'>
            <h2 className='category-title'>{categoryTitle}</h2>
            <Swiper
                spaceBetween={10}
                loop={true}
                loopFillGroupWithBlank={true}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
                breakpoints= {{
                    0: {
                      slidesPerView: 3,
                      slidesPerGroup: 3
                    },
                    // when window width is >= 260px
                    680: {
                      slidesPerView: 4,
                      slidesPerGroup: 4
                    },
                    // when window width is >= 680px
                    1100: {
                      slidesPerView: 5,
                      slidesPerGroup: 5
                    }}
                  }
            >
                {eachMovie}
            </Swiper>
      </div>
  )
}
