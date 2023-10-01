import { host, authHost } from './index.js'

export const getQuestionsById = async (id) => {
  const res = await host.get(`api/question?id=${id}`)
  console.log('asdfasd :', res)
  return res.data
}

export const deleteQuestionById = async (id) => {
  const res = await host.delete(`api/question/` + id)
  console.log('asdfasd :', res)
  return res.data
}
export const createQuestion = async (newQuestion) => {
  const res = await authHost.post('api/question', newQuestion)
  return res
}
