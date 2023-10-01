import React, { useEffect, useState, useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { deleteTopicById, getAllTopics } from '../http/topicApi'
import TopicCard from '../components/TopicCard'
import { Context } from '../index'
const TopicsList = observer(() => {
  // const [topics, setTopics]=useState([])
  const { topic } = useContext(Context)
  useEffect(() => {
    async function fetchData() {
      const topicsData = await getAllTopics()
      topic.setTopics(topicsData)
    }
    fetchData()
  }, [])

  const deleteTopic = async (topicId) => {
    if (window.confirm('Вы действительно хотите удалить этот топик?')) {
      const result = await deleteTopicById(topicId)
      if (result.status == 200) {
        topic.deleteTopic(topicId)
        alert('Топик успешно удален!!!')
      }
    }
  }
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
      }}
    >
      {topic.topics.map((topic) => (
        <TopicCard key={topic.id} topic={topic} onDelete={deleteTopic} />
      ))}
    </div>
  )
})

export default TopicsList
