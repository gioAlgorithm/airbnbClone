"use client"
import React from 'react'
import {CgProfile } from "react-icons/cg";
import style from "./Avatar.module.scss"

const Avatar = () => {
  return (
    <div className={style.avatar}>
      <CgProfile />
    </div>
  )
}

export default Avatar