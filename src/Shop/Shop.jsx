import './Shop.scss'
import HeaderPage from '../web-site/headerPage/HeaderPage'
import FooterPage from '../web-site/FooterPage/FooterPage'
import BodyShop from './BodyShop/BodyShop'
export default function Shop() {
  return (
    <div className='shop'>
      <HeaderPage/>
        <BodyShop/>
      <FooterPage/>
    </div>
  )
}
