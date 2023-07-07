import { Link, NavLink } from "react-router-dom";
import "./HeaderPage.scss";
import { MdPerson, MdShop } from "react-icons/md";
import { Button, Dropdown } from "antd";
export default function HeaderPage() {
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
  return (
    <div className="headerpage">
      <div className="wrapper">
        <div className="left">
          <h2>Tinh Lok</h2>
        </div>
        <div className="mid">
          <ul>
            <li>
              <NavLink>Home</NavLink>
            </li>
            <li>
              <NavLink>Shop</NavLink>
            </li>
            <li>
              <NavLink>Blog</NavLink>
            </li>
            <li>
              <NavLink>Contact</NavLink>
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
              <NavLink>0</NavLink>
            </li>
            <li>
              <NavLink>
                <MdShop />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
