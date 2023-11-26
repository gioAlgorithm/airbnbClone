"use client"

import React from 'react'
import style from "./MenuItem.module.scss"

interface MenuItemProps{
  onClick: ()=> void;
  label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({
  onClick, label
}) => {
  return (
    <div onClick={onClick} className={style.menuItem}>{label}</div>
  )
}

export default MenuItem