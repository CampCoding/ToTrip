import React from 'react'
import { COLORS,images} from '../../../constants'
import './review.css';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
const Review = () => {
  return (
    <>
      <div className='swiperparent'>
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
          <div className="review">
            <div className="review-info">
              <div className="person">
                <img src={images.faceimg} alt="" />
                <h3>abdelrahman</h3>
                <div className="stars">
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                </div>
              </div>
              <h6 className="date">
                1/7/2002
              </h6>
            </div>
            <p className="comment">
              Lorem ipsum dolor sit amet 
              consectetur, adipisicing elit.
              Quam nemo dicta quisquam mollitia, 
              modi, aspernatur nihil molestiae, 
              laborum debitis impedit voluptatibus vel 
              veritatis illum cum alias totam enim odio eaque.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="review">
            <div className="review-info">
              <div className="person">
                <img src={images.faceimg} alt="" />
                <h3>abdelrahman</h3>
                <div className="stars">
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                </div>
              </div>
              <span className="date">
                1/7/2002
              </span>
            </div>
            <p className="comment">
              Lorem ipsum dolor sit amet 
              consectetur, adipisicing elit.
              Quam nemo dicta quisquam mollitia, 
              modi, aspernatur nihil molestiae, 
              laborum debitis impedit voluptatibus vel 
              veritatis illum cum alias totam enim odio eaque.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="review">
            <div className="review-info">
              <div className="person">
                <img src={images.faceimg} alt="" />
                <h3>abdelrahman</h3>
                <div className="stars">
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                </div>
              </div>
              <h6 className="date">
                1/7/2002
              </h6>
            </div>
            <p className="comment">
              Lorem ipsum dolor sit amet 
              consectetur, adipisicing elit.
              Quam nemo dicta quisquam mollitia, 
              modi, aspernatur nihil molestiae, 
              laborum debitis impedit voluptatibus vel 
              veritatis illum cum alias totam enim odio eaque.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="review">
            <div className="review-info">
              <div className="person">
                <img src={images.faceimg} alt="" />
                <h3>abdelrahman</h3>
                <div className="stars">
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                </div>
              </div>
              <h6 className="date">
                1/7/2002
              </h6>
            </div>
            <p className="comment">
              Lorem ipsum dolor sit amet 
              consectetur, adipisicing elit.
              Quam nemo dicta quisquam mollitia, 
              modi, aspernatur nihil molestiae, 
              laborum debitis impedit voluptatibus vel 
              veritatis illum cum alias totam enim odio eaque.
            </p>
          </div>
        </SwiperSlide>
          </Swiper>
    </div>
    </>
  )
}

export default Review