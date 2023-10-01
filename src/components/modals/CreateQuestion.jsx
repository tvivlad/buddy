import React, { useState } from 'react'
import { Modal, Button, Form, Row } from 'react-bootstrap'
import { createQuestion } from '../../http/questionAPI'
const CreateQuestion = ({ show, onHide, dialogId }) => {
  const [questionName, setQuestionName] = useState('')
  const [questionAudio, setQuestionAudio] = useState(null)
  const [answer, setAnswer] = useState('')
  const [answerTime, setAnswerTime] = useState('')
  const selectAudioFile = (e) => {
    setQuestionAudio(e.target.files[0])
  }

  const addQuestion = () => {
    if (
      questionName.trim() == '' ||
      answer.trim() == '' ||
      answerTime.trim() == ''
    ) {
      alert('Заполните все поля!')
      return
    }

    if (questionAudio == null) {
      alert('Прикрепите все необходимые файлы!')
      return
    }
    const formData = new FormData()
    formData.append('questionName', questionName)
    formData.append('questionAudio', questionAudio)
    formData.append('answer', answer)
    formData.append('answerTime', answerTime)
    formData.append('dialogId', dialogId)

    createQuestion(formData).then((res) => {
      alert('Вопрос успешно добавлен!')
      onHide()
      console.log('Ответ после создания топика :', res)
    })
  }
  return (
    <Modal
      // {...props}
      show={show}
      onHide={onHide}
      size='lg'
      // aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id='contained-modal-title-vcenter'>
          Добавить новый вопрос
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            placeholder={'Введите название нового вопроса'}
            className='mt-3'
            value={questionName}
            onChange={(e) => setQuestionName(e.target.value)}
          />
          <label htmlFor='questionFile' className='mt-3'>
            Аудио файл
          </label>
          <Form.Control
            onChange={selectAudioFile}
            type='file'
            id='questionFile'
          />
          <Form.Control
            placeholder={'Введите ответ на вопрос'}
            className='mt-3'
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
          <Form.Control
            placeholder={'Введите время отводимое на ответ (в секундах)'}
            className='mt-3'
            value={answerTime}
            onChange={(e) => setAnswerTime(e.target.value)}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-warning' onClick={addQuestion}>
          Добавить
        </Button>
        <Button variant='outline-secondary' onClick={onHide}>
          Закрыть
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CreateQuestion
