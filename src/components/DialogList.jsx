import React, { useState, useEffect, useContext } from 'react'
import { Button, Tab, ListGroup, Row, Col } from 'react-bootstrap'
import { observer } from 'mobx-react-lite'
import { deleteDialogById, getDialogsById } from '../http/dialogsAPi'
import ScreenMap from './ScreenMap'
import CreateDialog from '../components/modals/CreateDialog'
import QuestionList from './QuestionList'
import { Context } from '../index'
import DialogInfo from './DialogInfo'

const DialogList = observer(({ topicId }) => {
  //const [dialog, setDialog]=useState([])
  const { dialog } = useContext(Context)
  const [createDialogShow, setCreateDialogShow] = useState(false)
  console.log('диалог после запроса :', dialog.dialogs.length)

  useEffect(() => {
    async function fetchData() {
      const data = await getDialogsById(topicId)
      dialog.setDialogs(data)
      dialog.setSelectedDialog(dialog.dialogs[0])
    }
    fetchData()
  }, [])

  const deleteDialog = async (dialogId) => {
    console.log('Удаление диалога с id ', dialogId)
    if (window.confirm('Вы действительно хотите удалить данный диалог?')) {
      const res = await deleteDialogById(dialogId)
      if (res.status == 200) {
        dialog.deleteDialog(dialogId)
      }
    }
  }
  return (
    <div style={{ position: 'relative' }}>
      <Button
        variant='outline-warning'
        onClick={() => setCreateDialogShow(true)}
        style={{ fontSize: '28px', bottom: '20px', right: '20px' }}
        className='mt-3 mb-5 px-3 d-block mx-auto w-50'
      >
        {' '}
        Добавить новый диалог{' '}
      </Button>
      <CreateDialog
        show={createDialogShow}
        onHide={() => setCreateDialogShow(false)}
        topicId={topicId}
      />
      <Tab.Container id='list-group-tabs-example'>
        {/* {`#${dialog[0].id}`} */}
        <Row>
          {dialog.dialogs.length ? (
            <>
              <Col sm={4}>
                <ListGroup>
                  {dialog.dialogs.map((dialogItem) => (
                    <ListGroup.Item
                      active={dialogItem.id === dialog.selectedDialog.id}
                      onClick={() => dialog.setSelectedDialog(dialogItem)}
                      key={dialogItem.id}
                      action
                      variant='warning'
                    >
                      {dialogItem.name}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Col>
              <Col sm={4}>
                <DialogInfo
                  dialog={dialog.selectedDialog}
                  onDelete={deleteDialog}
                />
              </Col>
              <Col sm={4}>
                <ScreenMap
                  dialogs={dialog.dialogs}
                  selectedDialogId={dialog.selectedDialog.id}
                />
              </Col>
            </>
          ) : (
            <Col sm={12}>
              <h2 style={{ textAlign: 'center' }}>
                "В этом топике пока нет диалогов"
              </h2>
            </Col>
          )}
          {dialog.dialogs.length && (
            <Col sm={12}>
              <QuestionList dialog={dialog.selectedDialog} />
            </Col>
          )}
        </Row>
      </Tab.Container>
    </div>
  )
})

export default DialogList
