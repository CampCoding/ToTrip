import React from 'react'
import './places.css'
import {images} from '../../../constants';
const Places = () => {
  return (
    <>
      <div className="all-places">
        <h1>Popular places</h1>
        <div className="places">
          <div className="place">
            <div className="place-image">
              <img src={images.placeimg} alt="" />
            </div>
            <h3>moroco</h3>
          </div>
          <div className="place">
            <div className="place-image">
              <img src={images.placeimg} alt="" />
            </div>
            <h3>moroco</h3>
          </div>
          <div className="place">
            <div className="place-image">
              <img src={images.placeimg} alt="" />
            </div>
            <h3>moroco</h3>
          </div>
          <div className="place">
            <div className="place-image">
              <img src={images.placeimg} alt="" />
            </div>
            <h3>moroco</h3>
          </div>
          <div className="place">
            <div className="place-image">
              <img src={images.placeimg} alt="" />
            </div>
            <h3>moroco</h3>
          </div>
          <div className="place">
            <div className="place-image">
              <img src={images.placeimg} alt="" />
            </div>
            <h3>moroco</h3>
          </div>
          <div className="place">
            <div className="place-image">
              <img src={images.placeimg} alt="" />
            </div>
            <h3>moroco</h3>
          </div>
          <div className="place">
            <div className="place-image">
              <img src={images.placeimg} alt="" />
            </div>
            <h3>moroco</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default Places