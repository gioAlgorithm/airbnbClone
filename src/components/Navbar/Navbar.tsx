"use client"

import React from 'react'
import style from "./Navbar.module.scss"
import Logo from './Logo'
import Search from './Search'
import NavbarContainer from './NavbarContainer'
import UserMenu from './UserMenu'

export default function Navbar() {
  return (
    <div className={style.navbar}>
      <NavbarContainer>
        <Logo />
        <Search />
        <UserMenu />
      </NavbarContainer>
    </div>
  )
}
