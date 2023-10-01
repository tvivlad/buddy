import React from 'react'
import QuestionList from './QuestionList'
import {Tab} from 'react-bootstrap'
const Questions = ({dialog}) => {
  return (
    <QuestionList dialog={dialog}/>
  )
}

export default Questions