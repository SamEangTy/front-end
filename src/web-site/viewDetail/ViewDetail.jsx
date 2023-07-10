import HeaderPage from '../headerPage/HeaderPage'
import ViewLists from '../ViewLists/ViewLists'
import FooterPage from '../FooterPage/FooterPage'
import './ViewDetail.scss'

export default function ViewDetail() {
  return (
    <div className='viewdetail'>
        <HeaderPage/>
        <ViewLists/>
        <FooterPage/>
    </div>
  )
}
