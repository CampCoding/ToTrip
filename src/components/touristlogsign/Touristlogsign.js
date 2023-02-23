import React, { useState } from 'react'
import './touristlogsign.css'
import axios from 'axios';
const Touristlogsign = () => {
  const [logsign, setlogsign] = useState(false);
  const changestatus=()=>{
    setlogsign(!logsign);
  }
  const [account, setaccount] = useState({
    name:'',
    email:'',
    password:''
  });
  const [logaccount, setlogaccount] = useState({
    email:'',
    password:'',
  });
  const handle=(e)=>{
    const newdata={...account}
    newdata[e.target.name]=e.target.value
    setaccount(newdata)
    console.log(newdata)
  }
  const submit=(e)=>{
    e.preventDefault();
    axios.post("http://localhost:3000/tlogsign",{
      name:account.name,
      email:account.email,
      password:account.password
    }).then(res=>{
      console.log(res.data)
    })
  }
  const handletoursitlogin=(e)=>{
    e.preventDefault();
    axios.post("http://localhost:3000/tlogsign",{
      email:logaccount.email,
      password:logaccount.password,
    })
  }
  return (
    <>
      <div className='alllogsign'>
      <div className={`tsignup ${logsign===false ? 'block':'hide'}`}>
        <h1>tourist sign up</h1>
        <form
          onSubmit={(e)=>{
          submit(e)
          }}
        >
          <input onChange={(e)=>handle(e)} name="name" type="text" placeholder='name' />
          <input onChange={(e)=>handle(e)} type="text" name="email" placeholder='email'/>
          <input onChange={(e)=>handle(e)} type="text" name='password'  placeholder='password'/>
          <button>sign up</button>
        </form>
        <a style={{color:'#111'}} onClick={()=>{changestatus()}}>are you have account? click here to log in</a>
      </div>
      <div className={`tlogin ${logsign===true ? 'block':'hide'}`}>
        <h1>tourist log in</h1>
        <form
        onSubmit={(e)=>{

        }}  
        >
          <input onChange={(e)=>setlogaccount({...logaccount,email:e.target.value})} type="text" placeholder='enter your mail' />
          <input onChange={(e)=>setlogaccount({...logaccount,password:e.target.value})} type="text" placeholder='enter your password' />
          <button>log in</button>
        </form>
        <a onClick={()=>{changestatus()}}>are you have not account? click here to sign up</a>
      </div>
      </div>
    </>
  )
}

export default Touristlogsign