import React, { useState } from 'react'
import  Container  from '../../component/Container/Container'
import Model from '../../component/Model/Model';
import { Input } from 'antd';
export default function DashBoard() {
  const [isModalOpen, setModalOpen] = useState(false)
  const onClickBtnRight = ()=>{
    setModalOpen(true)
  }
  return (
    <div>
     <Container
      pageTitle='Prodcut'
      btnRight="Add Product"
      onClickBtnRight = {onClickBtnRight}
      >
        <Model
        
        isModalOpen={isModalOpen}
        andleOk = {()=>setModalOpen(false)}
        handleCancel = {()=>setModalOpen(false)}
        modelTitle = "Add Product"
        />
        </Container>

    </div>
  )
}
