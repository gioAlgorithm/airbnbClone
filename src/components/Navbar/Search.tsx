"use client"
import React from 'react'
import style from "./Search.module.scss"
import {BiSearch} from "react-icons/bi"

const Search = () => {
  return (
    <div className={style.search}>
      <div className={style.anywhere}>Anywhere</div>
      <div className={style.anyWeek}><span>Any Week</span></div>
      <div className={style.searchGuest}>
        <span>Add Guest</span>
        <div className={style.searchIcon}>
          <BiSearch />
        </div>
      </div>
    </div>
  )
}

export default Search