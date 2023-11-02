import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import './styles.css'

const SlideHome = () =>{

  return (
    <>
       <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
       >
          <SwiperSlide>
                <img src="img/banner-1.webp" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="img/banner-2.webp" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="img/banner-3.webp" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="img/banner-4.webp" alt="" />
          </SwiperSlide>
       </Swiper>
    </>
  )

}

export default SlideHome;