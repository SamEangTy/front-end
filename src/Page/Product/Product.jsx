import { useEffect, useState } from 'react'
import axios from 'axios'
import { Button, Form, Image, Input, Modal, Space, Table } from 'antd';
export default function HomePage() {
  const [data, setData] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [discount, setDiscount] = useState('')
  const [image, setImage] = useState('')
  const column = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render:(value)=>(
        <p>{value+"$"}</p>
        )
    },
    
    {
      title: 'Discount',
      dataIndex: 'discount',
      key: 'dicount',
      render:(value)=>(
        <p>{value+"%"}</p>
      )
    },
    {
      title: 'Price Discount',
      dataIndex: 'discountPrice',
      key: 'discountPrice',
      render:(value)=>(
        <p>{parseInt(value)+"$"}</p>
        )
    },
    {
      title: 'Image',
      dataIndex: 'image',
      key:"image",
      render: image => <Image style={{width:"80px",height:"50px"}} alt={image} src={"http://localhost:8000/"+image} />,
    },
    {
      title: 'Action',
      render: (index,record)=>(

        <Space>
          <Button type='primary' onClick={()=>handleUpdate(index,record)}>Edit</Button>
        </Space>
      ),
      
    },
  ];
  useEffect(()=>{
    axios.get("http://localhost:8000/api/listProduct").then((res)=>{
      setData(res.data);
    }).catch((err)=>{
      console.log(err);
    })
  },[])
  const handleUpdate = (item)=>{
    setIsModalOpen(true);
    setName(item.name);
    setPrice(item.price);
    setDiscount(item.discount);
    setImage(item.image);
  }
  const handleOk = () => {
    setIsModalOpen(false);
    var form = new FormData()
    form.append("name",name)
    form.append("price",price)
    form.append("discount",discount)
    form.append("image",image)
    axios.post("http://localhost:8000/api/addProduct",form).then((res)=>{
    setData(res.data);
    }).catch((err)=>{
      console.log(err);
    })
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <h2>Home Page</h2>
     <Table
      rowKey="id"
      dataSource={data}
      columns={column}
      >
      </Table>
      <Modal title="Update HomePage" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Input placeholder='Update Name' defaultValue={name} onChange={(e)=>setName(e.target.value)}/>
        <Input placeholder='Update Price' defaultValue={price} onChange={(e)=>setPrice(e.target.value)}/>
        <Input placeholder='Update Discount' defaultValue={discount} onChange={(e)=>setDiscount(e.target.value)}/>
        <Input placeholder='Update Image' type='file' onChange={(e)=>setImage(e.target.files[0])}/>
        <Image style={{width:100}} src={"http://localhost:8000/"+image}/>
      </Modal>
    </div>
  )
}

