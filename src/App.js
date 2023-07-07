
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import './App.css';
import CustomerPage from './Page/Customer/Customer';
import DashBoard from './Page/DashBoard/DashBoard';
import ProductPage from './Page/Product/Product';
import LayoutOne from './component/Layout/Layout';
import LoginPage from './Page/Login/LoginPage';
import HeaderPage from './web-site/headerPage/HeaderPage';
import Index from './web-site/index';

function App() {
  const isLogin = localStorage.getItem('is_login') == "1" // true
  return (
  <BrowserRouter>
    {isLogin ?
    <LayoutOne>
      <Routes>
        <Route path='/' element={<DashBoard/>}/>
        <Route path='/customer' element={<CustomerPage/>}/>
        <Route path='/product' element={<ProductPage/>}/>
        <Route path='*' element={<h1>Route Not Found!</h1>}/>
      </Routes>
    </LayoutOne>
    :
    <Routes>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/' element={<Index/>}/>
        <Route path='*' element={<h1>Route Not Found!</h1>}/>
    </Routes>
    }
  </BrowserRouter>
  );
}

export default App;
