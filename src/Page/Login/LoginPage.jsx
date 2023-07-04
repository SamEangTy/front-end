import { Button, Input, Space } from 'antd'
import './Login.scss'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const handleLogin = ()=>{
    const form = new FormData()
    form.append('email',email)
    form.append('password',password)
    axios('http://localhost:8000/api/login',{
      method:"POST",
      data:form,
    }).then(res=>{
      console.log(res.data);
      if(res.data.email){
        localStorage.setItem("is_login","1")
        localStorage.setItem("user_info",JSON.stringify(res.data))
        window.location.href = "/"
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
            <Input placeholder='Password'  onChange={(e)=>setPassword(e.target.value)} style={{width:300}}/>
            <Button style={{width:300,fontWeight:"bold"}} onClick={handleLogin}>Login</Button>
        </Space>
     </div>
    </div>
  )
}
