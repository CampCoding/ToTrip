import React, { useEffect, useState } from 'react'
import { COLORS, FONTS, SIZES } from '../../constants'
import './cglogin.css'
import axios from 'axios'
const CGlogin = () => {
const [account, setaccount] = useState({
  email:'',
  password:'',
});
  const submitlogin=(e)=>{
    e.preventDefault()
    console.log(account);
    axios.post("http://localhost:3000/cgsignup",{
      email:account.email,
      password:account.password,
    }).then((res)=>{
      console.log(res);
    }).catch((err)=>{
      console.error(err);
    })
  }
  return (
    <>
      <div className='login'>
        <h1 style={{color:COLORS.primary}}>welcome</h1>
        <p style={{color:COLORS.red}}>today suitable for trip...!</p>
        <form
        onSubmit={(e)=>{
          e.preventDefault()
          submitlogin(e)
        }}
        >
          <input 
          type="email" 
          placeholder='email'
          onChange={(e)=>setaccount({...account,email:e.target.value})}
          />
          <input 
          type="password" 
          placeholder='password'
          onChange={(e)=>setaccount({...account,password:e.target.value})}
          />
          <button type='submit'>login</button>
        </form>
      </div>
    </>
  )
}

export default CGlogin