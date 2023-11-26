"use client"
import React, {useState, useCallback} from 'react'
import style from "./UserMenu.module.scss"
import {AiOutlineMenu} from "react-icons/ai"
import Avatar from '../Avatar/Avatar'
import MenuItem from './MenuItem'

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = useCallback(() =>{
    setIsOpen((value) => !value)
  }, [])

  return (
    <div className={style.userMenu}>
      <div className={style.userHome}>Airbnb your home</div>
      <div onClick={toggleOpen} className={style.profileMenu}>
        <AiOutlineMenu />
        <div className={style.avatarHolder}>
          <Avatar />
        </div>
      </div>
      {isOpen && (
        <div className={style.menuItemHolder}>
          <>
            <MenuItem onClick={()=>{}} label='Login'/>
            <MenuItem onClick={()=>{}} label='Sign up'/>
          </>
        </div>
      )

      }
    </div>
  )
}

export default UserMenu