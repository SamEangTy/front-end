import React, { useEffect, useState } from 'react';
import './Layout.scss'
import { MdDashboard, MdMessage, MdNotificationAdd, MdNotifications, MdProductionQuantityLimits, MdSupervisedUserCircle } from 'react-icons/md';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme, Space, Dropdown, Image } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../logo.svg'
const { Header, Sider, Content } = Layout;

const LayoutOne = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const [profile, setProfile] = useState(false)
  const navigate = useNavigate()
  const {
    token: { colorBgContainer },
  } = theme.useToken();
const menuItem = [
    {
      key: '/',
      icon: <MdDashboard />,
      label: 'DashBoard',
    },
    {
      key: '/customer',
      icon: <MdSupervisedUserCircle />,
      label: 'Customer',
    },
    {
      key: '/product',
      icon: <MdProductionQuantityLimits />,
      label: 'Product',
    },
  ]
  
  const handleMenu = (e)=>{
    navigate(e.key);
  }
  const handleLogout = (e)=>{
    localStorage.clear()
    window.location.href = '/'
  }
  const isLogin = (localStorage.getItem("is_login") == "1")
  const user = JSON.parse(localStorage.getItem('profile'))
  const items = [
    {
      key: '1',
      label: (
          <p>
            Profile: name
          </p>
      ),
    },
    {
      key: '2',
      label: (
        <a>
          2nd menu item
        </a>
      ),
    },
    {
      key: '3',
      label: (
        <Link onClick={handleLogout}>
          Logout
        </Link>
      ),
    },
  ];
  return (
    <Layout style={{height:"100vh"}}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={menuItem}
          onClick={handleMenu}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} className='header'>
         <div>
         <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          <Space>
          <p>Dashboard</p>
          <p>Users</p>
          <p>Setting</p>
          </Space>
         </div>
         <div className='containerPro'>
            <div className='icon'>
                <MdNotifications fontSize={25} style={{marginRight:10}}/>
                <MdMessage fontSize={25} style={{marginRight:20}}/>
            </div>
            <Dropdown 
                menu={{
                  items,
                }}
                placement="bottomLeft"
                arrow
                >
                  <img src={logo} className='profile'/>
            </Dropdown>
         </div>
           
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
            {props.children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutOne;