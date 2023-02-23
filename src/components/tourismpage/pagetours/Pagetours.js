import React from 'react'
import './pagetours.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { COLORS, images } from '../../../constants';
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard,slidesPerView } from "swiper";
const Pagetours = () => {
  return (
    <>
      <div className="page-swiper">
        <h1 style={{color:COLORS.move}}>popular tours</h1>
        <Swiper
          breakpoints={{
            0:{
              slidesPerView:1,
              spaceBetween:10,
            },
            480:{
              slidesPerView:2,
              spaceBetween:10,
            },
            768:{
              slidesPerView:3,
              spaceBetween:15,
            },
            1024:{
              slidesPerView:3,
              spaceBetween:15,
            },
            1280:{
              slidesPerView:3,
              spaceBetween:20,
            },

          }}
          cssMode={true}
          slidesPerView={4}
          spaceBetween={10}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="page-tour">
            <img src={images.placeimg} alt="" />
            <h4 style={{color:COLORS.blueDark}}>Tokyo tour à la carte</h4>
            <p style={{color:'#666'}}>
              This tour covers my favorite 
              places in Tokyo.You can choose 
              three places from the list of 
              more than 30 places in
            </p>
            <h3 >
              <span>from</span>
              <span style={{color:COLORS.red}}> $223 </span>
              <span>/ per groube</span>
            </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="page-tour">
            <img src={images.placeimg} alt="" />
            <h4 style={{color:COLORS.blueDark}}>Tokyo tour à la carte</h4>
            <p style={{color:'#666'}}>
              This tour covers my favorite 
              places in Tokyo.You can choose 
              three places from the list of 
              more than 30 places in
            </p>
            <h3>
              <span>from</span>
              <span style={{color:COLORS.red}}>$223 </span>
              <span>/ per groube</span>
            </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="page-tour">
            <img src={images.placeimg} alt="" />
            <h4 style={{color:COLORS.blueDark}}>Tokyo tour à la carte</h4>
            <p style={{color:'#666'}}>
              This tour covers my favorite 
              places in Tokyo.You can choose 
              three places from the list of 
              more than 30 places in
            </p>
            <h3>
              <span>from</span>
              <span style={{color:COLORS.red}}>$223 </span>
              <span>/ per groube</span>
            </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="page-tour">
            <img src={images.placeimg} alt="" />
            <h4 style={{color:COLORS.blueDark}}>Tokyo tour à la carte</h4>
            <p style={{color:'#666'}}>
              This tour covers my favorite 
              places in Tokyo.You can choose 
              three places from the list of 
              more than 30 places in
            </p>
            <h3>
              <span>from</span>
              <span style={{color:COLORS.red}}>$223 </span>
              <span>/ per groube</span>
            </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="page-tour">
            <img src={images.placeimg} alt="" />
            <h4 style={{color:COLORS.blueDark}}>Tokyo tour à la carte</h4>
            <p style={{color:'#666'}}>
              This tour covers my favorite 
              places in Tokyo.You can choose 
              three places from the list of 
              more than 30 places in
            </p>
            <h3>
              <span>from</span>
              <span style={{color:COLORS.red}}> $223 </span>
              <span>/ per groube</span>
            </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="page-tour">
            <img src={images.placeimg} alt="" />
            <h4 style={{color:COLORS.blueDark}}>Tokyo tour à la carte</h4>
            <p style={{color:'#666'}}>
              This tour covers my favorite 
              places in Tokyo.You can choose 
              three places from the list of 
              more than 30 places in
            </p>
            <h3>
              <span>from</span>
              <span style={{color:COLORS.red}}>$223 </span>
              <span>/ per groube</span>
            </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="page-tour">
            <img src={images.placeimg} alt="" />
            <h4 style={{color:COLORS.blueDark}}>Tokyo tour à la carte</h4>
            <p style={{color:'#666'}}>
              This tour covers my favorite 
              places in Tokyo.You can choose 
              three places from the list of 
              more than 30 places in
            </p>
            <h3>
              <span>from</span>
              <span style={{color:COLORS.red}}> $223 </span>
              <span>/ per groube</span>
            </h3>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}

export default Pagetours