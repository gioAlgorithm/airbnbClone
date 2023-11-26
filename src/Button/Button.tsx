'use client'

import React from 'react'
import style from "./Button.module.scss"
import {IconType} from "react-icons"

interface ButtonProps{
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  icon?: IconType;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  icon
}) => {
  return (
    <button className={style.button} onClick={onClick} disabled={disabled}>
      
      {label}
    </button>
  )
}

export default Button