import { useEffect, useState } from 'react';
import './HomePage.scss'
import {MdLocationOn } from "react-icons/md";
import axios from 'axios';
export default function HomPage() {
  const [data, setData] = useState([])
  useEffect(()=>{
    axios.get("http://localhost:8000/api/homepage").then((res)=>{
      setData(res.data);
    }).catch((err)=>{
      console.log(err);
    })
  },[])
  return (
    <>
    {data.map((item,index)=>{
      return(
    <div className='homepage' key={index}>
      <img style={{height:"100vh",backgroundSize:"cover",width:"100%"}} src={"http://localhost:8000/"+item.file_path} alt={"http://localhost:8000/"+item.file_path}  />
      <div className='wrapper'> 
           <h1>{item.caption}</h1>
           <p>{item.p_desc}</p>
           <span>{item.s_desc}</span>
      </div>
      <p className='location'><MdLocationOn style={{color:"#669933"}}/> California, USA</p>
    </div>
      )
    })}
      </>
  )
}
