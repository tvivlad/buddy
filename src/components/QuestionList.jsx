import React, { useState, useEffect, useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { deleteQuestionById, getQuestionsById } from '../http/questionAPI'
import Question from './Question'
import { Button } from 'react-bootstrap'
import CreateQuestion from './modals/CreateQuestion'
import { Context } from '../index'

const QuestionList = observer(({ dialog }) => {
  // const [questions, setQuestions]=useState([])
  const { question } = useContext(Context)
  const [createQuestionShow, setCreateQuestionShow] = useState(false)
  useEffect(() => {
    async function fetchData() {
      const data = await getQuestionsById(dialog.id)
      await question.setQuestions(data)
      console.log('Получение вопросов с сервера', question.questions)
    }
    fetchData()
  }, [dialog])

  const deleteQuestion = async (questionId) => {
    console.log('Удаление вопроса с id ', questionId)
    if (window.confirm('Вы действительно хотите удалить данный Вопрос?')) {
      const res = await deleteQuestionById(questionId)
      if (res.status == 200) {
        question.deleteQuestion(questionId)
      }
    }
  }
  return (
    <div className='border border-warning rounded'>
      {console.log('Прорисовка вопросов!!!!!')}
      <div className='d-flex align-items-center justify-content-between px-2'>
        <p class='h3 d-flex w-75 justify-content-start my-3'>
          Вопросы диалога: {dialog.name}
        </p>
        <Button
          variant='outline-warning'
          className=''
          onClick={() => setCreateQuestionShow(true)}
        >
          {' '}
          Добавить вопрос
        </Button>
        <CreateQuestion
          show={createQuestionShow}
          onHide={() => setCreateQuestionShow(false)}
          dialogId={dialog.id}
        />
      </div>
      {question.questions.length ? (
        question.questions.map((question, index) => {
          return (
            <Question
              question={question}
              index={index}
              onDelete={deleteQuestion}
            />
          )
        })
      ) : (
        <h2 style={{ textAlign: 'center' }}>
          В этом диалоге пока нет вопросов
        </h2>
      )}
    </div>
  )
})

export default QuestionList
