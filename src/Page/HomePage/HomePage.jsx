import { useEffect, useState } from 'react'
import './HomePage.scss'
import axios from 'axios'
import { Button, Form, Image, Input, Modal, Space, Table } from 'antd';
export default function HomePage() {
  const [data, setData] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [caption, setCaption] = useState('')
  const [p_desc, setP_desc] = useState('')
  const [s_desc, setS_desc] = useState('')
  const [file_path, setFile_path] = useState('')
  const column = [
    {
      title: 'Caption',
      dataIndex: 'caption',
      key: 'caption',
    },
    {
      title: 'Paragprah',
      dataIndex: 'p_desc',
      key: 'p_desc',
    },
    {
      title: 'Text',
      dataIndex: 's_desc',
      key: 's_desc',
    },
    {
      title: 'Image',
      dataIndex: 'file_path',
      key:"file_path",
      render: file_path => <Image style={{width:"80px",height:"50px"}} alt={file_path} src={"http://localhost:8000/"+file_path} />,
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
    axios.get("http://localhost:8000/api/homepage").then((res)=>{
      setData(res.data);
    }).catch((err)=>{
      console.log(err);
    })
  },[])
  const handleUpdate = (item)=>{
    setIsModalOpen(true);
    setCaption(item.caption);
    setP_desc(item.p_desc);
    setS_desc(item.s_desc);
    setFile_path(item.file_path);
  }
  const handleOk = () => {
    setIsModalOpen(false);
    var form = new FormData()
    form.append("caption",caption)
    form.append("p_desc",p_desc)
    form.append("s_desc",s_desc)
    form.append("file_path",file_path)
    // console.log(form.caption);
    // var form = {
    //   caption : caption
    // }
    // console.log(form);
  //   for (var hh of form.entries()) {
  //     console.log(hh[0]+ ', ' + hh[1]); 
  // }
    axios.post("http://localhost:8000/api/update-home/1",form).then((res)=>{
    console.log(res.data);
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
        <Input placeholder='Update Caption' defaultValue={caption} onChange={(e)=>setCaption(e.target.value)}/>
        <Input placeholder='Update Paragraph' defaultValue={p_desc} onChange={(e)=>setP_desc(e.target.value)}/>
        <Input placeholder='Update Text' defaultValue={s_desc} onChange={(e)=>setS_desc(e.target.value)}/>
        <Input placeholder='Update Image' type='file' onChange={(e)=>setFile_path(e.target.files[0])}/>
        <Image style={{width:100}} src={"http://localhost:8000/"+file_path}/>
      </Modal>
    </div>
  )
}
