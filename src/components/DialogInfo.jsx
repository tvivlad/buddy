import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import classes from '../styles/dialog.module.css'
import EditDialog from './modals/EditDialog'

const DialogInfo = ({ dialog, onDelete }) => {
  const [editDialogShow, setEditDialogShow] = useState(false)
  return (
    <>
      <div className='border border-warning p-3'>
        <div className='font-weight-bold mb-2 d-flex justify-content-center'>
          {dialog.name}
        </div>
        <div className='d-flex justify-content-around flex-column'>
          <span className='border border-warning rounded px-4 mb-1'>
            Ось X: {dialog.pointCoordX}%
          </span>
          <span className='border border-warning rounded px-4 mb-1'>
            Ось Y: {dialog.pointCoordY}%{' '}
          </span>
        </div>
        {/* <div>{dialog.dialogImage} </div> */}
        <div className='d-flex justify-content-center m-2'>
          <img
            style={{ width: '280px', height: '210px', objectFit: 'cover' }}
            src={process.env.REACT_APP_API_URL + dialog.dialogImage}
            alt='dialog.dialogImage'
          />
        </div>
      </div>
      <div className='d-flex'>
        <EditDialog
          show={editDialogShow}
          onHide={() => setEditDialogShow(false)}
          topicId={dialog.topicId}
          dialog={dialog}
        />
        <Button
          variant='outline-warning'
          className=' mt-3 ml-1 d-block mx-auto'
          onClick={() => setEditDialogShow(true)}
        >
          {' '}
          Редактировать диалог
        </Button>
        <Button
          variant='outline-danger'
          className=' mt-3 ml-1 d-block mx-auto'
          onClick={() => onDelete(dialog.id)}
        >
          Удалить диалог
        </Button>
      </div>
    </>
  )
}
export default DialogInfo
