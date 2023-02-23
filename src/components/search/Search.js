import React from 'react'
import './search.css';
import axios from 'axios';
import { useState,useEffect } from 'react';
import Searchedcat from './searchedcat/Searchedcat';
const Search = () => {
  const [text, settext] = useState('');
  const [searchedelement, setsearchedelement] = useState([]);
  const [all, setall] = useState(true);
  const [guide, setguide] = useState(false);
  const [companies, setcompanies] = useState(false);
  useEffect(()=>{
    getallcategory();
  },[])
  const getguide=(cat)=>{
    setall(false);
    setcompanies(false)
    setguide(true)
    axios.get(`http://localhost:3000/searched?category=${cat}`)
    .then(res=>setsearchedelement(res.data));
  }
  const getallcategory=()=>{
    setcompanies(false)
    setguide(false);
    setall(true)
    axios.get(`http://localhost:3000/searched`)
    .then(res=>setsearchedelement(res.data));
  }
  const getcompany=(cat)=>{
    setguide(false)
    setguide(false)
    setcompanies(true)
    axios.get(`http://localhost:3000/searched?category=${cat}`)
    .then(res=>setsearchedelement(res.data));
  }
  const searchelement=(sename)=>{
    axios.get(`http://localhost:3000/searched?name=${sename}`)
    .then(res=>{
      setsearchedelement(res.data)
      console.log(res.data);
    });
  }
  return (
    <div className='container search'>
      <div className="search-form">
        <form
        onSubmit={(e)=>{
          e.preventDefault();
        }}
        >
          <input 
          type="text" 
          placeholder='search here'
          onChange={(e)=>settext(e.target.value)}
          />
          <button onClick={()=>searchelement()}>search</button>
        </form>
      </div>
      <div className='category'>
        <button className={`${all===true ?'border':'noborder'}`} onClick={()=>getallcategory()}>all</button>
        <button className={`${guide===true ?'border':'noborder'}`} onClick={()=>getguide('guide')}>guides</button>
        <button className={`${companies===true ?'border':'noborder'}`} onClick={()=>getcompany('company')}>companies</button>
      </div>
      <div className="guides-companies">
        {
          searchedelement.map((searched,index)=>{
            return <Searchedcat searched={searched} key={index}/>
          })
        }
      </div>
    </div>
  )
}

export default Search