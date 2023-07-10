import { Button, Input, Space, message } from 'antd'
import './Login.scss'
import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const navigate = useNavigate()
  const handleLogin = ()=>{
    const params = {
      "email" : email,
    "password": password
    }
    axios.post('http://localhost:8000/api/login',params).then(res=>{
      if(res.data.user){
        localStorage.setItem("is_login", "1"); // is_login = 1
        localStorage.setItem("profile", JSON.stringify(res.data.user));
        window.location.href = "/";
        // navigate("/", { replace: true });
        message.success(res.data.message)
      }else if(res.data.email !== email || res.data.password !== password){
        message.error(res.data.message)
      }  
    }).catch(err=>{
      console.log(err);
    })
  }
  return (
    <div className='login'>
     <div className='wrapper'>
        <h2>Welcome To Tinh Lok</h2>
        <Space style={{flexDirection:"column",}} >
            <Input placeholder='Email' type='text' onChange={(e)=>setEmail(e.target.value)} style={{width:300}}/>
            <Input placeholder='Password' type='password'  onChange={(e)=>setPassword(e.target.value)} style={{width:300}}/>
            <Button style={{width:300,fontWeight:"bold"}} onClick={handleLogin}>Login</Button>
        </Space>
     </div>
    </div>
  )
}
