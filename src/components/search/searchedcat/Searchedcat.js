import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './searchedcat.css'
import jsxToString from "jsx-to-string";
import {COLORS} from '../../../constants'
import ReactCurvedText from "react-curved-text";
const Searchedcat = ({searched}) => {
  const [rating, setrating] = useState(null);
  const [starrate, setstarrate] = useState([]);
  const [active, setactive] = useState("all");
  const [width, setWidth] = useState(370);
  const [height, setHeight] = useState(300);
  const [cx, setCx] = useState(125);
  const [cy, setCy] = useState(199);
  const [rx, setRx] = useState(104);
  const [ry, setRy] = useState(100);
  const [startOffset, setStartOffset] = useState(50);
  const [reversed, setReversed] = useState(false);
  const [text, setText] = useState(`#${searched.category}`);
  const [fontSize, setFontSize] = useState(24);
  const [textPathFill, setTextPathFill] = useState();
  const [dy, setDy] = useState(0);
  const [fill, setFill] = useState();
  const [rotate, setRotate] = useState(6);

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
  useEffect(()=>{
    setstarrate(searched.rate)
  },[]);

  return (
    <>
      <div className="searched">
        <div className="image">
          <img src={searched.image} alt="" />
          <span className='exampleWrapperDiv'>
          
          {currentJsx}
          </span>          
        </div>
        <div className="searched-details">
          <h2>{searched.name}</h2>
          <p>{searched.description}</p>
          <div className='rate-profile'>
          <p className='rate'>
            <span>{searched.rate}</span>
            <div className='stars'>
            {[...Array(5)].map((star,i)=>{
              const ratingvalue=i+1;
              return (
                <label key={i}>
                  <input 
                    type="radio"
                    name='rating'
                    onClick={()=>setrating(ratingvalue)}
                  />
                  <i style={{color:ratingvalue<=(starrate) ?"#ffc107":"#e4e5e9"}} className="fa-solid fa-star star"></i>                
                </label>
              )
            })}
            </div>
            <span>{searched.perrated}</span>
          </p>
          </div>
          <Link className='profile' to={`/profile/${searched.id}`}>profile</Link>
        </div>
      </div>
    </>
  )
}

export default Searchedcat