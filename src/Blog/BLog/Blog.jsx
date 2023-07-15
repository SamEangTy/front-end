import React from 'react'
import HeaderPage from '../../web-site/headerPage/HeaderPage'
import FooterPage from '../../web-site/FooterPage/FooterPage'
import BodyBlog from '../BodyBlog/BodyBlog'

export default function Blog() {
  return (
    <div>
      <HeaderPage/>
      <BodyBlog/>
      <FooterPage/>
    </div>
  )
}
