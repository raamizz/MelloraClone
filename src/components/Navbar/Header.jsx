import React from 'react'
import BannerNav from './BannerNav'
import MainNav from './MainNav'
import MenuNav from './MenuNav'

function Header() {
  return (
    <div>
      <BannerNav/>
      <MainNav/>
      <MenuNav/>
    </div>
  )
}

export default Header
