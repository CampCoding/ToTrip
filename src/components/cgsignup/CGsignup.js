import axios from 'axios';
import React, { useState } from 'react'
import {COLORS} from '../../constants'
import './cgsignup.css';
const CGsignup = () => {
  const [account, setaccount] = useState({
    name:'',
    email:'',
    password:''
  });
  const handle=(e)=>{
    const newdata={...account}
    newdata[e.target.name]=e.target.value
    setaccount(newdata)
    console.log(newdata)
  }
  const submit=(e)=>{
    e.preventDefault();
    axios.post("http://localhost:3000/cgsignup",{
      name:account.name,
      email:account.email,
      password:account.password
    }).then(res=>{
      console.log(res.data)
    })
  }
  return (
    <>
      <div className="guide-sign-up">
        <h1 style={{color:COLORS.primary}}>sign up</h1>
        <form
        onSubmit={(e)=>{
          submit(e)
        }}
        >
          <input onChange={(e)=>handle(e)} name="name" type="text" placeholder='name' />
          <input onChange={(e)=>handle(e)} type="text" name="email" placeholder='email'/>
          <input onChange={(e)=>handle(e)} type="text" name='password'  placeholder='password'/>
          <button className='butn'>sign up</button>
        </form>
      </div>
    </>
  )
}

export default CGsignup