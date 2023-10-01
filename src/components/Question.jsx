import React from 'react'
import { Button } from 'react-bootstrap'

const Question = ({ question, index, onDelete }) => {
  return (
    <div className='bg-warning ml-1 mt-1 p-2 rounded d-flex align-items-center '>
      <span className='font-weight-bolder'>{index}.</span>
      <span
        className='ml-3 mr-3 p-1 font-weight-bolder border border-light rounded'
        style={{ width: '15%' }}
      >
        {question.questionName}
      </span>
      <audio
        controls
        src={process.env.REACT_APP_API_URL + question.questionAudioUrl}
      ></audio>
      <span className='ml-3 mr-3 p-1 font-weight-bolder w-25 border border-light rounded'>
        {question.answer}
      </span>
      <span className='font-weight-bolder'>Время на ответ (ceк):</span>
      <span className='ml-3 mr-5 py-1 px-3 font-weight-bolder border border-light rounded'>
        {question.answerTime}
      </span>
      {/* <Button variant='outline-dark' className='mx-3'>
        Редактировать
      </Button> */}
      <Button
        variant='outline-danger'
        className='mx-3'
        onClick={() => onDelete(question.id)}
      >
        {' '}
        Удалить
      </Button>
    </div>
  )
}

export default Question
