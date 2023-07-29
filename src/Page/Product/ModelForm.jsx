import { Input, Modal } from 'antd'
import React, { useState } from 'react'

export default function ModelForm(
    {
        isModalOpen = false,  
        handleOk = false,
        handleCancel = false,
        modelTitle = "Model Title"
    }
) {
  const [name, setName] = useState('')
  console.log(name);
  return (
    <div>
       <Modal title={modelTitle} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Input placeholder='Update Name' defaultValue={name} onChange={(e)=>setName(e.target.value)}/>
      </Modal>
    </div>
  )
}
