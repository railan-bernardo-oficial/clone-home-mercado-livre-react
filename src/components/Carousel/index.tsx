import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import Card from "../Card";
import './styles.css';

const Carousel = () =>{

  return (
    <>
      <Swiper
          cssMode={true}
          navigation={true}
          pagination={false}
          mousewheel={true}
          keyboard={true}
          rewind={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
       >
          <SwiperSlide className="px-4">
            <div className="grid grid-cols-5 gap-4 my-5 px-14">
                <Card image={'img/p-1.webp'} />
                <Card image={'img/p-2.webp'} />
                <Card image={'img/p-3.webp'} />
                <Card image={'img/p-4.webp'} />
                <Card image={'img/p-5.webp'} />
            </div>
          </SwiperSlide>
          <SwiperSlide className="px-4">
            <div className="grid grid-cols-5 gap-4 my-5 px-14">
                <Card image={'img/p-6.webp'} />
                <Card image={'img/p-2.webp'} />
                <Card image={'img/p-3.webp'} />
                <Card image={'img/p-4.webp'} />
                <Card image={'img/p-5.webp'} />
            </div>
          </SwiperSlide>
       </Swiper>
    </>
  )

}

export default Carousel;