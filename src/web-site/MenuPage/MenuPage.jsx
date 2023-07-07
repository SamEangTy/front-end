import MenuList from '../MenuList/MenuList'
import './MenuPage.scss'

export default function MenuPage() {
  return (
    <div className='menupage'>
      <div className="wrapper">
        <MenuList/>
        <MenuList/>
        <MenuList/>
        <MenuList/>
        <MenuList/>
        <MenuList/>
      </div>
    </div>
  )
}
