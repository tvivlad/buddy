import React, { useState, useContext } from 'react'
import { Modal, Button, Form, Row } from 'react-bootstrap'
import { createTopic } from '../../http/topicApi'
import { Context } from '../../index'
const CreateTopic = ({ show, onHide }) => {
  const { user } = useContext(Context)
  console.log('данные пользователя :', user)
  const [topicTitle, setTopicTitle] = useState('')
  const [topicDescription, setTopicDescription] = useState('')
  const [topicImg, setTopicImg] = useState(null)
  const [topicIcon, setTopicIcon] = useState(null)
  const [topicLoadingImg, setTopicLoadingImg] = useState(null)
  const [topicAudio, setTopicAudio] = useState(null)

  const selectTopicImgFile = (e) => {
    setTopicImg(e.target.files[0])
  }
  const selectTopicIconFile = (e) => {
    setTopicIcon(e.target.files[0])
  }
  const selectTopicLoadingImgFile = (e) => {
    setTopicLoadingImg(e.target.files[0])
  }
  const selectTopicAudio = (e) => {
    setTopicAudio(e.target.files[0])
  }

  const addTopic = () => {
    if (topicTitle.trim() == '' || topicDescription.trim() == '') {
      alert('Заполните все поля!')
      return
    }

    if (
      topicIcon == null ||
      topicLoadingImg == null ||
      topicImg == null ||
      topicAudio == null
    ) {
      alert('Прикрепите все необходимые файлы!')
      return
    }
    const formData = new FormData()
    formData.append('name', topicTitle)
    formData.append('description', topicDescription)
    formData.append('userId', user.user.id)
    formData.append('topicIcon', topicIcon)
    formData.append('loadingImage', topicLoadingImg)
    formData.append('topicImage', topicImg)
    formData.append('topicAudio', topicAudio)

    const res = createTopic(formData).then((res) => {
      if (res.statusText == 'OK') {
        onHide()
        alert('Новый топик успешно создан')
      }
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
          Добавить новый топик
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            value={topicTitle}
            onChange={(e) => setTopicTitle(e.target.value)}
            placeholder={'Введите название нового топика'}
            className='mt-3'
          />
          <Form.Control
            value={topicDescription}
            onChange={(e) => setTopicDescription(e.target.value)}
            placeholder={'Введите описание'}
            as='textarea'
            rows={3}
            className='mt-3 mb-4'
          />
          <label htmlFor='topicImage' className='mt-3'>
            Картинка для отображения топика
          </label>
          <Form.Control
            onChange={selectTopicImgFile}
            type='file'
            id='topicImage'
          />
          <label htmlFor='topicIcon' className='mt-3'>
            Иконка для отображения топика в приложении
          </label>
          <Form.Control
            onChange={selectTopicIconFile}
            type='file'
            id='topicIcon'
          />
          <label htmlFor='loadingImage' className='mt-3'>
            Картинка для отображения во время загрузки
          </label>
          <Form.Control
            onChange={selectTopicLoadingImgFile}
            type='file'
            id='loadingImage'
          />
          <label htmlFor='topicAudio' className='mt-3'>
            Файл с записью фонового шума для топика
          </label>
          <Form.Control
            onChange={selectTopicAudio}
            type='file'
            id='topicAudio'
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-warning' onClick={addTopic}>
          Добавить
        </Button>
        <Button variant='outline-secondary' onClick={onHide}>
          Закрыть
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CreateTopic
