import React from 'react'
import classes from '../styles/screen.module.css'
import Point from './Point'
import {Tab}from 'react-bootstrap'

const ScreenMap = ({dialogs, selectedDialogId}) => {
  return (
    <div className={classes.screen}>
        {dialogs.map((dialog,index)=> {
          if (dialog.id===selectedDialogId)
            return <Point x={dialog.pointCoordX}  y={dialog.pointCoordY} index={index} active={true}/>
          else {
            return <Point x={dialog.pointCoordX}  y={dialog.pointCoordY} index={index} active={false}/>

          }  
          }   
        )}

    </div>
  )
}

export default ScreenMap