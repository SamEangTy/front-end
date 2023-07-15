import { Link, NavLink } from "react-router-dom";
import "./HeaderPage.scss";
import { MdKeyboardDoubleArrowUp, MdPerson, MdShop } from "react-icons/md";
import { Dropdown } from "antd";
import { useState } from "react";
export default function HeaderPage(props) {
  const [bgColor, setBgColor] = useState()
  const items = [
    {
      key: "1",
      label: (
        <Link to="/login" style={{fontWeight:"bold"}}>
            Login
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link to="/register" style={{fontWeight:"bold"}}>
            Register
        </Link>
      ),    
    },
  ];
  const onScrolling = ()=>{
    const scroll = document.documentElement.scrollTop
    if(scroll === 0){
      setBgColor()
    }else{
      setBgColor({background:"white"})
    }
    
  }
  window.addEventListener('scroll',onScrolling)
  const handleBH = ()=>{
    window.scrollTo({top:0, behavior: 'smooth' });
  }
  
  return (
    <div className="headerpage" style={bgColor}>
      <div className="wrapper">
        <div className="left">
          <h2><Link to={'/'}>Tinh Lok</Link></h2>
        </div>
        <div className="mid">
          <ul>
            <li>
              <NavLink to={'/'}>Home</NavLink>
            </li>
            <li>
              <NavLink to={'/shop'}>Shop</NavLink>
            </li>
            <li>
              <NavLink to={'/blog'}>Blog</NavLink>
            </li>
            <li>
              <NavLink to={'/contact'}>Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className="right">
          <ul>
            <li>
              <NavLink>EN</NavLink>
            </li>
            <li>
            <Dropdown
              menu={{
                items,
              }}
              placement="bottomLeft"
              arrow
            >
              <NavLink>
                <MdPerson />
              </NavLink>
            </Dropdown>
            </li>
           
            <li>
              <NavLink>{props.cart}</NavLink>
            </li>
            <li>
              <NavLink>
                <MdShop />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="backhome" onClick={handleBH}>
        <Link ><MdKeyboardDoubleArrowUp fontSize={30}/></Link>
      </div>
    </div>
  );
}
