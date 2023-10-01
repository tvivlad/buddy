import React, { useState } from 'react'
import { Modal, Button, Form, Row } from 'react-bootstrap'
import { createDialog } from '../../http/dialogsAPi'

const CreateDialog = ({ show, onHide, topicId }) => {
  const [dialogName, setDialogName] = useState('')
  const [dialogImg, setDialogImg] = useState(null)
  const [pointCoordX, setPointCoordX] = useState('')
  const [pointCoordY, setPointCoordY] = useState('')

  const selectDialogImgFile = (e) => {
    setDialogImg(e.target.files[0])
  }

  const addDialog = () => {
    if (
      dialogName.trim() == '' ||
      pointCoordX.trim() == '' ||
      pointCoordY.trim() == ''
    ) {
      alert('Заполните все поля!')
      return
    }

    if (dialogImg == null) {
      alert('Прикрепите все необходимые файлы!')
      return
    }
    const formData = new FormData()
    formData.append('name', dialogName)
    formData.append('dialogImage', dialogImg)
    formData.append('topicId', topicId)
    formData.append('pointCoordX', pointCoordX)
    formData.append('pointCoordY', pointCoordY)
    createDialog(formData).then((res) => {
      alert('Диалог успешно создан!')
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
          Добавить новый диалог
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            placeholder={'Введите название нового диалога'}
            className='mt-3'
            value={dialogName}
            onChange={(e) => setDialogName(e.target.value)}
          />
          <label htmlFor='topicPoint' className='mt-3'>
            Координаты точки на карте топика
          </label>
          <Form.Control
            placeholder={'Введите координату X 0..100%'}
            className='mt-3'
            id='topicPoint'
            value={pointCoordX}
            onChange={(e) => setPointCoordX(e.target.value)}
          />
          <Form.Control
            placeholder={'Введите координату Y 0..100%'}
            className='mt-3'
            value={pointCoordY}
            onChange={(e) => setPointCoordY(e.target.value)}
          />
          <label htmlFor='topicImage' className='mt-3'>
            Картинка для отображения Диалога
          </label>
          <Form.Control
            onChange={selectDialogImgFile}
            type='file'
            id='topicImage'
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-warning' onClick={addDialog}>
          Добавить
        </Button>
        <Button variant='outline-secondary' onClick={onHide}>
          Закрыть
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CreateDialog
