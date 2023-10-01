import { host, authHost } from './index.js'

export const getAllTopics = async () => {
  const res = await host.get('api/topic')
  console.log('asdfasd :', res)
  return res.data
}

export const deleteTopicById = async (topicId) => {
  const res = await host.delete('api/topic/' + topicId)
  return res
}

export const updateTopic = async (newTopic) => {
  const res = await host.post('api/topic/update', newTopic)
  return res
}
export const createTopic = async (newTopic) => {
  const res = await authHost.post('api/topic', newTopic)
  return res
}
