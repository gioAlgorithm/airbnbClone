"use client"
import React, {useState, useEffect, useCallback} from 'react'
import style from "./Modal.module.scss"
import {IoMdClose} from "react-icons/io"
import Button from '@/Button/Button';

interface ModalProps{
  isOpen?: boolean;
  onClose: ()=> void;
  onSubmit: ()=> void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: ()=> void;
  secondaryLabel?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
  secondaryAction,
  secondaryLabel
}) => {
  const [showModal, setShowModal] = useState(isOpen)

  useEffect(()=>{
    setShowModal(isOpen)
  }, [isOpen])

  const handleClose = useCallback(()=>{
    if(disabled){
      return
    }

    setShowModal(false)
    setTimeout(()=>{
      onClose()
    }, 300)
  }, [disabled, onClose])

  const handleSubmit = useCallback(()=>{
    if(disabled){
      return
    }

    onSubmit()
  }, [disabled, onSubmit])

  const handleSecondaryAction = useCallback(()=>{
    if(disabled || !secondaryAction){
      return
    }

    secondaryAction()
  }, [disabled, secondaryAction])

  if(!isOpen){
    return null
  }

  return (
    <>
      <div className={style.modal}>
        <div className={style.modalHolder}>
          <div className={style.modalContainer} style={{ transform: `translateY(${showModal ? '0' : '100%'})`, opacity: showModal ? '1' : '0' }}>
            {/* Header */}
            <div className={style.modalHeader}>
              <button className={style.moduleClose} onClick={handleClose}>
                <IoMdClose />
              </button>
              <div className={style.modalTitle}>{title}</div>
            </div>
            {/* BODY */}
            <div className={style.modalBody}>
              {body}
            </div>
            {/* FOOTER */}
            <div className={style.modalFooter}>
              <Button label='myButton' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal