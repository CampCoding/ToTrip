import React, { useEffect, useRef, useState } from 'react'
import './header.css';
import {Link} from 'react-router-dom'
import { COLORS, images } from '../../constants';



const Header = () => {
  const [signtype, setsigntype] = useState(null);
  useEffect(()=>{
    let guideprofile=localStorage.getItem("guide");
    if(guideprofile){
      setsigntype("guide")
    }
    let companyprofile=localStorage.getItem("company");
    if(companyprofile){
      setsigntype("company")
    }

    let tourist=localStorage.getItem("tourist");
    if(tourist){
      setsigntype("tourist")
    }
  },[])
  const navRef = useRef();
  const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};
  const [show, setshow] = useState(false);
  const showlinks=()=>{
    console.log("show links");
    setshow(!show)
  }
  return (
<header>
		<Link to={'/'} className="logo">
        <img src={images.logo} alt="" />
    </Link>
			<nav ref={navRef}>
        <Link to={'/'}>home</Link>
        <Link to={'/search'}>search</Link>
        <Link to={'/tlogsign'}>tlogsign</Link>
        <Link to={'/cgsignup'}>cg signup</Link>
        <Link to={'/cglogin'}>cg login</Link>
        <Link to={'/profileedit'}>profile</Link>
        <Link to={'/profileedit'}>profileedit</Link>
{/*         {(signtype==="company"||signtype==="guide")?<Link to={'/profile/1'}>profile</Link>:null}
        {(signtype==="company"||signtype==="guide")?<Link to={'/profile/1'}>profileedit</Link>:null} */}
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
          <i style={{color:COLORS.red}} className="fa-solid fa-xmark"></i>				
        </button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
      <i className="fa-solid fa-bars"></i>
			</button>
		</header>
  )
}

export default Header