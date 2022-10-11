import React, { Component } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
// import 'swiper/swiper-bundle.css'
export default class banner extends Component {
  state = {
    list: [1, 2, 3, 4, 5]
  }
  componentDidMount() {
    
  }

  render() {
    return (
      <div>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={(sw) => console.log('slide change', sw)}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
      </div>
    )
  }
}
