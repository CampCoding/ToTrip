import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { COLORS, images } from '../../../constants';
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './companies.css'
import jsxToString from "jsx-to-string";
import ReactCurvedText from "react-curved-text";
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard,slidesPerView } from "swiper";
const Companies = () => {
  const [width, setWidth] = useState(370);
  const [height, setHeight] = useState(300);
  const [cx, setCx] = useState(107);
  const [cy, setCy] = useState(190);
  const [rx, setRx] = useState(100);
  const [ry, setRy] = useState(100);
  const [startOffset, setStartOffset] = useState(50);
  const [reversed, setReversed] = useState(false);
  const [text, setText] = useState("#company");
  const [fontSize, setFontSize] = useState(24);
  const [textPathFill, setTextPathFill] = useState();
  const [dy, setDy] = useState(0);
  const [fill, setFill] = useState();
  const [rotate, setRotate] = useState(0);

  const textProps = fontSize ? { style: { fontSize: fontSize } } : null;
  const textPathProps = textPathFill ? { fill: textPathFill } : null;
  const tspanProps = dy ? { dy: dy } : null;
  const ellipseProps = fill ? { style: `fill: ${fill}` } : null;
  const svgProps = rotate
    ? { style: { transform: `rotate(${rotate}deg)` } }
    : null;

  const currentJsx = (
    <ReactCurvedText
      width={width}
      height={height}
      cx={cx}
      cy={cy}
      rx={rx}
      ry={ry}
      startOffset={startOffset}
      reversed={reversed}
      text={text}
      textProps={textProps}
      textPathProps={textPathProps}
      tspanProps={tspanProps}
      ellipseProps={ellipseProps}
      svgProps={svgProps}
    />
  );

  let currentJsxString = jsxToString(currentJsx, {
    displayName: "ReactCurvedText",
    useFunctionCode: true
  });
  currentJsxString =
    "import ReactCurvedText from 'react-curved-text';\n\n" + currentJsxString;
  return (
    <>
      <div className="all-companies">
        <h1 style={{color:COLORS.moveDark}}>popular companies</h1>
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
              spaceBetween:15,
            },

          }}
          cssMode={true}
          slidesPerView={3}
          spaceBetween={5}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="page-company">
            <h4 style={{color:COLORS.blueDark}}>Tokyo tour à la carte</h4>
            <div className="company-image">
              <img src={images.placeimg} alt="" />
              <span className='exampleWrapperDiv'>          
                {currentJsx}
              </span>  
            </div>
            <div className="com-rate">
              <div>
              <i className="fa-solid fa-star" style={{color:COLORS.yellow}}></i>
              <span>5.00</span>
              </div>
              <div className="company-review">
                <span>(1) reviews</span>
              </div>
            </div>
            <p style={{color:'#666'}}>
              This tour covers my favorite 
              places in Tokyo.You can choose 
              three places from the list of 
              more than 30 places in
            </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="page-company">
            <h4 style={{color:COLORS.blueDark}}>Tokyo tour à la carte</h4>
            <div className="company-image">
              <img src={images.placeimg} alt="" />
              <span className='exampleWrapperDiv'>          
                {currentJsx}
              </span>
            </div>
            <div className="com-rate">
              <div>
              <i className="fa-solid fa-star" style={{color:COLORS.yellow}}></i>
              <span>5.00</span>
              </div>
              <div className="company-review">
                <span>(1) reviews</span>
              </div>
            </div>
            <p style={{color:'#666'}}>
              This tour covers my favorite 
              places in Tokyo.You can choose 
              three places from the list of 
              more than 30 places in
            </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="page-company">
            <h4 style={{color:COLORS.blueDark}}>Tokyo tour à la carte</h4>
            <div className="company-image">
              <img src={images.placeimg} alt="" />
              <span className='exampleWrapperDiv'>          
                {currentJsx}
              </span>
            </div>
            <div className="com-rate">
              <div>
              <i className="fa-solid fa-star" style={{color:COLORS.yellow}}></i>
              <span>5.00</span>
              </div>
              <div className="company-review">
                <span>(1) reviews</span>
              </div>
            </div>
            <p style={{color:'#666'}}>
              This tour covers my favorite 
              places in Tokyo.You can choose 
              three places from the list of 
              more than 30 places in
            </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="page-company">
            <h4 style={{color:COLORS.blueDark}}>Tokyo tour à la carte</h4>
            <div className="company-image">
              <img src={images.placeimg} alt="" />
              <span className='exampleWrapperDiv'>          
                {currentJsx}
              </span>
            </div>
            <div className="com-rate">
              <div>
              <i className="fa-solid fa-star" style={{color:COLORS.yellow}}></i>
              <span>5.00</span>
              </div>
              <div className="company-review">
                <span>(1) reviews</span>
              </div>
            </div>
            <p style={{color:'#666'}}>
              This tour covers my favorite 
              places in Tokyo.You can choose 
              three places from the list of 
              more than 30 places in
            </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="page-company">
            <h4 style={{color:COLORS.blueDark}}>Tokyo tour à la carte</h4>
            <div className="company-image">
              <img src={images.placeimg} alt="" />
              <span className='exampleWrapperDiv'>          
                {currentJsx}
              </span>
            </div>
            <div className="com-rate">
              <div>
              <i className="fa-solid fa-star" style={{color:COLORS.yellow}}></i>
              <span>5.00</span>
              </div>
              <div className="company-review">
                <span>(1) reviews</span>
              </div>
            </div>
            <p style={{color:'#666'}}>
              This tour covers my favorite 
              places in Tokyo.You can choose 
              three places from the list of 
              more than 30 places in
            </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="page-company">
            <h4 style={{color:COLORS.blueDark}}>Tokyo tour à la carte</h4>
            <div className="company-image">
              <img src={images.placeimg} alt="" />
              <span className='exampleWrapperDiv'>          
                {currentJsx}
              </span>
            </div>
            <div className="com-rate">
              <div>
              <i className="fa-solid fa-star" style={{color:COLORS.yellow}}></i>
              <span>5.00</span>
              </div>
              <div className="company-review">
                <span>(1) reviews</span>
              </div>
            </div>
            <p style={{color:'#666'}}>
              This tour covers my favorite 
              places in Tokyo.You can choose 
              three places from the list of 
              more than 30 places in
            </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}

export default Companies