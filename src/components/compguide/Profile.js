import React from 'react'
import { AppData, COLORS, FONTS, icons, images, SIZES } from '../../constants';
import './profile.css';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import Tours from './tours/Tours';
import Review from './review/Review';
import Footer from '../footer/Footer';

const Profile = () => {

  return (
    <>
      <div className="all container">
        <div className="top">
          <div className="videos">
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
                <iframe width="560" height="315" src="https://www.youtube.com/embed/8aWHZncV95Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>        
              </SwiperSlide>
              <SwiperSlide>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/8aWHZncV95Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>        
              </SwiperSlide>
              <SwiperSlide>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/8aWHZncV95Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>        
              </SwiperSlide>
              <SwiperSlide>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/8aWHZncV95Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>        
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="guide">
            <div>
              <div className="about-abilities">
              <div className="abilities">
              <div className="guide-img">
                  <img src={images.faceimg} alt="" />
                  <div className="guide-name">
                    <span style={{...COLORS,color:COLORS.line,textTransform:'capitalize',fontSize:'20px'}}>abdu ali.</span>
                    <div style={{margin:'10px 0px 0px 0px'}} className="guide-rate">
                    <i style={{color:'yellow'}} className="fa-solid fa-star"></i>
                    <span>4.75</span>
                    <div className="guide-review">
                      (8)reviews
                    </div>
                    </div>
                  </div>
                </div>
              <div className='ability'>
              <i style={{color:COLORS.primary}} className="fa-solid fa-location-dot"></i>
              <div className="ability-info">
                <h1 style={{...FONTS,color:COLORS.moveDark}} className='title'>available areas</h1>
                <p style={{color:COLORS.line}}>Al Buhayrah, Al Fayyum, Cairo (Living), Alexandria, Giza</p>
              </div>
              </div>
              <div className='ability'>
                <i style={{color:COLORS.primary}} className="fa-solid fa-location-dot"></i>
                <div className="ability-info">
                  <h1 style={{...FONTS,color:COLORS.moveDark}} className='title'>available areas</h1>
                  <p style={{color:COLORS.line}}>Al Buhayrah, Al Fayyum, Cairo (Living), Alexandria, Giza</p>
                </div>
              </div>
              <div className='ability'>
                <i style={{color:COLORS.primary}} className="fa-solid fa-location-dot"></i>
                <div className="ability-info">
                  <h1 style={{...FONTS,color:COLORS.moveDark}} className='title'>available areas</h1>
                  <p style={{color:COLORS.line}}>Al Buhayrah, Al Fayyum, Cairo (Living), Alexandria, Giza</p>
                </div>
              </div>
                <div className='ability'>
                  <i style={{color:COLORS.primary}} className="fa-solid fa-location-dot"></i>
                  <div className="ability-info">
                  <h1 style={{...FONTS,color:COLORS.moveDark}}
                  className='title'>available areas</h1>
                  <p style={{color:COLORS.line}}>Al Buhayrah, Al Fayyum, Cairo (Living), Alexandria, Giza</p>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
          <div className="about">
            <h1 style={{color:COLORS.moveDark}}>about</h1>
            <p style={{color:COLORS.line}}>Lorem ipsum dolor sit, amet consectetur 
              adipisicing elit. Illum maxime error expedita 
              asperiores, quas, maiores veniam necessitatibus quisquam porro 
              in impedit, dolore quia 
              ipsam aspernatur saepe similique. Ipsum, a exercitationem!
            </p>
          </div>
          <div className="tours">
            <Tours/>
          </div>
        </div>
        <div className="bottom">
          <Review/>
        </div>
      </div>
      <Footer/>
    </>
    
  )
}

export default Profile