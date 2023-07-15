import './BodyShop.scss'
import Search from 'antd/es/input/Search';
import { useRef, useState } from 'react';
import MenuPage from '../../web-site/MenuPage/MenuPage'

export default function BodyShop() {
  const [show,setShow] = useState(false)
  const [showcat,setShowCat] = useState(false)
  const RefSearch = useRef(null)
  const categ =useRef(null)
  const handleSearch = ()=>{
    if(show === false){
      RefSearch.current.style.display = "none";
      setShow(true);
    }else{
      RefSearch.current.style.display = "block";
      setShow(false);
    }

  }
  const handleCateg = ()=>{
    if(showcat === false){
      categ.current.style.display = "none";
      setShowCat(true);
    }else{
      categ.current.style.display = "block";
      setShowCat(false);
    }
  }

  return (
    <div className="bodyshop">
      <div className="wrapper">
        <div className="left">
          <ul>
            <li onClick={handleSearch} ><h2>Search</h2> <p>{show == true ? "+" : "-"}</p></li>
            <hr />
            <div  ref={RefSearch}>
            <Search 
              style={{margin:"10px 0"}} placeholder='Search'/>
            </div>
            <li onClick={handleCateg} ><h2>Categories</h2>  <p>{showcat == true ? "+" : "-"}</p></li>
            <ul ref={categ} style={{color:"#669933"}}>
              <li>Amino and BCAA's</li>
              <li>Shakers</li>
              <li>Protein</li>
              <li>Creatins</li>
              <li>Packs</li>
              <li>Vitamins</li>
            </ul>
            <hr />
            <li><h2>Tags</h2>  <p>+</p></li>
            <hr />
          </ul>
        </div>
        <div className="right">
            <MenuPage/>
        </div>
      </div>
    </div>
  );
}
