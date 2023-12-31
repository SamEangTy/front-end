import { useEffect, useState } from "react";
import {
  Button,
  Image,
  Input,
  Modal,
  Select,
  Space,
  Table,
  message,
} from "antd";
import Container from "../../component/Container/Container";
import { request } from "../../util/api";
import axios from "axios";
export default function HomePage() {
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [categery_id, setCatery_id] = useState(null);
  const [image, setImage] = useState(null);
  const [price, setPrice] = useState('')
  const [discount, setDiscount] = useState('')
  const [product_id, setProduct_id] = useState(null)
  const column = [
    {
      title: "No",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (value) => <p>{value + "$"}</p>,
    },

    {
      title: "Discount",
      dataIndex: "discount",
      key: "dicount",
      render: (value) => <p>{value + "%"}</p>,
    },
    {
      title: "Price Discount",
      dataIndex: "discountPrice",
      key: "discountPrice",
      render: (value) => <p>{parseFloat(value) + "$"}</p>,
    },
    {
      title: "Categery Name",
      dataIndex: "categery_name",
      key:'categery_name'
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (image) => (
        <Image
          style={{ width: "80px", height: "50px" }}
          alt={image}
          src={"http://localhost:8000/" + image}
        />
      ),
    },
    {
      title: "Action",
      render: (index, record) => (
        <Space>
          <Button
            size="small"
            type="primary"
            onClick={() => handleUpdate(index, record)}
          >
            Edit
          </Button>
          <Button size="small" danger onClick={() => handleDelete(record.id)}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];
  const handleDelete = (id) => {
    request("delete", "deleteProduct/" + id, {}).then((res) => {
      listProduct();
      if (res.status === 200) {
        message.success("Product Delete Success");
      }
    });
  };
  const handleUpdate = (item) => {
    setIsModalOpen(true);
    setName(item.name);
    setPrice(item.price);
    setDiscount(item.discount);
    setCatery_id(item.categery_id);
    setImage(item.image);
    setProduct_id(item.id)
  };
  console.log(image);
  useEffect(() => {
    listProduct();
  }, []);
  const listProduct = () => {
    request("get", "listProduct", {}).then((res) => {
      setData(res.data);
    });
  };

  const handleOk = () => {
    setIsModalOpen(false);
    if(product_id == null){
      var form = new FormData();
      form.append("name", name);
      form.append("price", price);
      form.append("discount", discount);
      form.append("categery_id", categery_id);
      form.append('image',image);
      request("post", "addProduct", form, {}).then((res) => {
        listProduct();
        if (res.status === 201) {
          message.success("Product Created Success");
        }
      });
    }
    else{
      
      var form = new FormData();
      // form.append("id", product_id)
      form.append("name", name);
      form.append("price", price);
      form.append("discount", discount);
      form.append("categery_id", categery_id);
      // form.append('image',image);
      axios.post('http://localhost:8000/api/updateProduct/'+product_id,form).then((res)=>{
        listProduct()
      })
    }
  };
  const clearForm = ()=>{
    setName('');
    setPrice("");
    setDiscount("");
    setCatery_id(null);
    setImage("");
    setProduct_id(null)
  }
  const handleCancel = () => {
    setIsModalOpen(false);
    clearForm();
  };

  const handleSelect = (value) => {
    setCatery_id(value)
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };
  const option = [
    {
      value: 1,
      label: "Amino and BCAA's",
    },
    {
      value: 2,
      label: "Shackers",
    },
    {
      value: 3,
      label: "Protein",
    },
  ];
  return (
    <div>
      <Container
        onClickBtnRight={() => setIsModalOpen(true)}
        pageTitle="Product"
        btnRight="Add Product"
      >
        <Table
          rowKey="id"
          dataSource={data}
          columns={column}
          pagination={{
            pageSize: 6,
          }}
          size="small"
        ></Table>
        <Modal
          title={product_id ? "Update Product" : "Add Product"}
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Space direction="vertical" style={{ width: "100%" }}>
            <Input
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <Input
              placeholder="Discount"
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
            />
            <Select
              showSearch
              placeholder="Select a Categery"
              optionFilterProp="children"
              onChange={handleSelect}
              onSearch={onSearch}
              value={categery_id}
              style={{ width: "100%" }}
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              options={option}
            />
            <Input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
            />
            <Image style={{width:100}} src={"http://localhost:8000/"+image}/>
          </Space>
        </Modal>
      </Container>
    </div>
  );
}
