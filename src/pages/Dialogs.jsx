import React,{useState} from 'react'
import { useParams } from 'react-router-dom'
import DialogList from '../components/DialogList'
import {Button} from 'react-bootstrap'
const Dialogs = () => {

  const params=useParams()
  return (
    <div>
     {/*    Dialogs {params.id} */}
        <DialogList topicId={params.id}/>
    </div>
  )
}

export default Dialogs