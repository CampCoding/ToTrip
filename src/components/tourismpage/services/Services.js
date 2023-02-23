import React from 'react'
import {COLORS, icons, images} from '../../../constants'
import './services.css'
const Services = () => {
  return (
    <>
      <div className="services" style={{padding:'30px 0px'}}>
        <div className="service">
          <div className="icon">
            <img src={images.link} alt="" />
          </div>
          <div style={{color:COLORS.light}} className="service-details">
            <h5>help you to</h5>
            <h5>get companies and guides</h5>
          </div>
        </div>
        <div className="service">
          <div className="icon">
            <img src={images.travel} alt="" />
          </div>
          <div style={{color:COLORS.light}} className="service-details">
            <h5>any trip very easy</h5>
            <h5>you will live the experience</h5>
          </div>
        </div>
        <div className="service">
          <div className="icon">
            <img src={images.best} alt="" />
          </div>
          <div style={{color:COLORS.light}} className="service-details">
            <h5>recommend the best</h5>
            <h5>companies and guides in the world</h5>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services