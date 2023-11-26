"use client"
import React from 'react'
import style from "./Navbar.module.scss"
import Image from 'next/image'
import {useRouter} from 'next/navigation'

const Logo = () => {
  const router = useRouter()

  return (
    <Image 
      alt='logo'
      width="100"
      height="100"
      src="/images/logo.png"
      className={style.logo}
    />
  )
}

export default Logo
