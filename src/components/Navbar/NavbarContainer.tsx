"use client"
import React from 'react'
import style from "./Navbar.module.scss"

interface NavbarContainerProps{
  children: React.ReactNode
}

const NavbarContainer: React.FC<NavbarContainerProps> = ({
  children
}) =>{
  return(
    <div className={style.navbarContainer}>{children}</div>
  )
}

export default NavbarContainer