import React from 'react'
import { COLORS, images } from '../../../constants'
import './tours.css'
const Tours = () => {
  return (
    <>
      <div className="tourist">
        <div className="tour">
          <img src={images.faceimg} alt="" />
          <div className="tour-info">
            <h2 style={{color:COLORS.secondary}}>Day tour Sakkara, Giza Pyramids & Sphinx</h2>
            <p>Start your tour by exploring Sakkara Pyramids: you will see the complex of king Djoser " Zoser" , it is considered as</p>
            <h4>from <span>$39</span> /per person</h4>
          </div>
        </div>
        <div className="tour">
          <img src={images.faceimg} alt="" />
          <div className="tour-info">
            <h2 style={{color:COLORS.secondary}}>Day tour Sakkara, Giza Pyramids & Sphinx</h2>
            <p>Start your tour by exploring Sakkara Pyramids: you will see the complex of king Djoser " Zoser" , it is considered as</p>
            <h4>from <span>$39</span> /per person</h4>
          </div>
        </div>
        <div className="tour">
          <img src={images.faceimg} alt="" />
          <div className="tour-info">
            <h2 style={{color:COLORS.secondary}}>Day tour Sakkara, Giza Pyramids & Sphinx</h2>
            <p>Start your tour by exploring Sakkara Pyramids: you will see the complex of king Djoser " Zoser" , it is considered as</p>
            <h4>from <span>$39</span> /per person</h4>
          </div>
        </div>
        <div className="tour">
          <img src={images.faceimg} alt="" />
          <div className="tour-info">
            <h2 style={{color:COLORS.secondary}}>Day tour Sakkara, Giza Pyramids & Sphinx</h2>
            <p>Start your tour by exploring Sakkara Pyramids: you will see the complex of king Djoser " Zoser" , it is considered as</p>
            <h4>from <span>$39</span> /per person</h4>
          </div>
        </div>
      </div>
    </>
  )
}

export default Tours