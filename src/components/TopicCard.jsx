import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import { Navigate, useNavigate } from 'react-router-dom'
import EditTopic from '../components/modals/EditTopic'
const TopicCard = ({ topic, onDelete }) => {
  const [editTopicShow, setEditTopicShow] = useState(false)
  const navigate = useNavigate()
  console.log('topic : ', topic)
  //   console.log('путь до картинки : ', process.env.REACT_APP_API_URL+topic.topicImage)
  return (
    <Card
      style={{ width: '24rem', minWidth: '250px' }}
      className='imgFluid mt-5'
    >
      <EditTopic
        show={editTopicShow}
        onHide={() => setEditTopicShow(false)}
        topic={topic}
      />
      <Card.Img
        variant='top'
        style={{ maxHeight: '230px', objectFit: 'cover' }}
        src={process.env.REACT_APP_API_URL + topic.topicImage}
      />
      <Card.Body>
        <Card.Title>{topic.name}</Card.Title>
        <Card.Text>
          {topic.description}
          <div></div>
        </Card.Text>
        <div className='d-flex justify-content-center mb-3'>
          <Button
            variant='outline-warning'
            onClick={() => navigate(`/topics/${topic.id}`)}
          >
            Открыть
          </Button>
        </div>
        <div className='d-flex justify-content-center'>
          <Button
            variant='outline-warning'
            onClick={() => setEditTopicShow(true)}
          >
            Редактировать
          </Button>
        </div>
      </Card.Body>
      <Button
        className='position-absolute '
        style={{ top: '10px', right: '10px' }}
        variant='outline-danger'
        onClick={() => onDelete(topic.id)}
      >
        Х
      </Button>
    </Card>
  )
}

export default TopicCard
